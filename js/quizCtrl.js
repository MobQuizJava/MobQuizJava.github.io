﻿app.controller('quizCtrl', ['$scope', '$http', 'helperService', function ($scope, $http, helper) {
        $scope.quizName = 'data/1IntroductionToJava.js';

        //Note: Only those configs are functional which is documented at: http://www.codeproject.com/Articles/860024/Quiz-Application-in-AngularJs
        // Others are work in progress.
        $scope.defaultConfig = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false, // if true, it will move to next question automatically when answered.
            'duration': 0, // indicates the time in which quiz needs to be completed. post that, quiz will be automatically submitted. 0 means unlimited.
            'pageSize': 1,
            'requiredAll': false, // indicates if you must answer all the questions before submitting.
            'richText': false,
            'shuffleQuestions': true,
            'shuffleOptions': true,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
            //'quizMessage': 'Take Next Day Quiz!'
        }

        $scope.goTo = function (index) {
            if (index > 0 && index <= $scope.totalItems) {
                //if (index > 0 && index <= 5) {
                $scope.currentPage = index;
                if (index == 1)
                {
                    //alert(index);
                    $scope.prevIsDisabled = true;
                    // console.log($scope.prevIsDisabled);
                } else
                {
                    //alert(index);
                    $scope.prevIsDisabled = false;
                    //console.log($scope.prevIsDisabled);
                }
                ;
                if (index == $scope.totalItems)
                {
                    //alert(index);
                    $scope.nextIsDisabled = true;
                    $scope.showReview = true;
                    $scope.showSubmit = true;
                    // console.log($scope.prevIsDisabled);
                } else
                {
                    //alert(index);
                    $scope.nextIsDisabled = false;
                    //$scope.showReview = false;
                    //$scope.showSubmit = false;
                    //console.log($scope.prevIsDisabled);
                }
                ;
                //alert(index);
                if ($scope.mode == 'review')
                {
                    $scope.showReview = true;
                    $scope.showSubmit = true;
                }
                ;
                //console.log(index);
                $scope.mode = 'quiz';
            }
        }

        $scope.onSelect = function (question, option) {
            if (question.QuestionTypeId == 1) { //
                question.Options.forEach(function (element, index, array) {
                    if (element.Id != option.Id) {
                        element.Selected = false;
                        question.Answered = element.Id;
                    }
                });
            }

            if ($scope.config.autoMove == true && $scope.currentPage < $scope.totalItems)
                $scope.currentPage++;
        }

        $scope.onSubmit = function () {
            var answers = [];
            $scope.questions.forEach(function (q, index) {
                answers.push({'QuizId': $scope.quiz.Id, 'QuestionId': q.Id, 'Answered': q.Answered});
            });
            // Post your data to the server here. answers contains the questionId and the users' answer.
            //$http.post('api/Quiz/Submit', answers).success(function (data, status) {
            //    alert(data);
            //});
            //console.log(answers);
            console.log($scope.questions);
            $scope.mode = 'result';
        }

        $scope.pageCount = function () {
            return Math.ceil($scope.questions.length / $scope.itemsPerPage);
        };

        //If you wish, you may create a separate factory or service to call loadQuiz. To keep things simple, i have kept it within controller.
        $scope.loadQuiz = function (file) {
            //alert('About to load the quiz');
            $http.get(file)
                    .then(function (res) {
                        $scope.quiz = res.data.quiz;
                        //alert($scope.quiz);
                        $scope.config = helper.extend({}, $scope.defaultConfig, res.data.config);
                        $scope.questions = $scope.config.shuffleQuestions ? helper.shuffle(res.data.questions) : res.data.questions;
                        $scope.totalItems = $scope.questions.length;
                        $scope.itemsPerPage = $scope.config.pageSize;
                        $scope.currentPage = 1;
                        $scope.mode = 'quiz';

                        $scope.$watch('currentPage + itemsPerPage', function () {
                            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                                    end = begin + $scope.itemsPerPage;

                            $scope.filteredQuestions = $scope.questions.slice(begin, end);
                        });
                    });
//            if ($scope.quizName !== 'data/3AbstractClass.js')
//            {
//                $scope.quizMessage = 'You Completed Last Day Quiz! Take Quiz Again!';
//            }
//            else
//            {
//                 $scope.quizMessage = 'Take Next Day Quiz!';
//            }
//            ;

        }
        $scope.loadQuiz($scope.quizName);

        $scope.isAnswered = function (index) {
            var answered = 'Not Answered';
            $scope.questions[index].Options.forEach(function (element, index, array) {
                if (element.Selected == true) {
                    answered = 'Answered';
                    return false;
                }
            });
            return answered;
        };

        $scope.isCorrect = function (question) {
            var result = 'correct';
            question.Options.forEach(function (option, index, array) {
                if (helper.toBool(option.Selected) != option.IsAnswer) {
                    result = 'wrong';
                    return false;
                }
            });
            return result;
        };

 //       $scope.swapQuiz = function () {
            //alert($scope.showSubmit);
   //         if ($scope.quizName == 'data/1IntroductionToJava.js') {
     //           $scope.quizName = 'data/2ControlStructures.js';
       //         $scope.quizMessage = 'Take Next Day Quiz!';
         //       //alert($scope.quizMessage);
    //        } else if ($scope.quizName == 'data/2ControlStructures.js') {
    //            $scope.quizName = 'data/3AbstractClass.js';
     //           $scope.quizMessage = 'You have completed the Last Day Quiz!'
      //          //alert($scope.quizMessage);
      //      } else if ($scope.quizName == 'data/3AbstractClass.js') {
        //        $scope.quizName = 'data/1IntroductionToJava.js';
          //      $scope.quizMessage = 'Take Next Day Quiz!';
            //    //alert($scope.quizMessage);
    //        }
    //        ;

    //    };

            $scope.swapQuiz = function () {
            //alert($scope.showSubmit);
            if ($scope.quizName == 'data/1IntroductionToJava.js') {
                $scope.quizName = 'data/2ControlStructures.js';
                $scope.quizMessage = 'Take Next Day Quiz!';
                //alert($scope.quizMessage);
            } else if ($scope.quizName == 'data/2ControlStructures.js') {
                $scope.quizName = 'data/3AbstractClass.js';
                //$scope.quizMessage = 'You have completed the Last Day Quiz!'
                $scope.quizMessage = 'Take Next Day Quiz!';
                //alert($scope.quizMessage);
            } else if ($scope.quizName == 'data/3AbstractClass.js') {
                $scope.quizName = 'data/4Exceptions.js';
                $scope.quizMessage = 'Take Next Day Quiz!';
                //alert($scope.quizMessage);
            } else if ($scope.quizName == 'data/4Exceptions.js') {
                //$scope.quizName = 'data/5Multithreading.js';
                $scope.quizName = 'data/2ControlStructures.js';
                $scope.quizMessage = 'You have completed the Last Day Quiz!';
                //alert($scope.quizMessage);
            } else if ($scope.quizName == 'data/5Multithreading.js') {
                $scope.quizName = 'data/1IntroductionToJava.js';
                $scope.quizMessage = 'Take Next Day Quiz!';
                //alert($scope.quizMessage);
            }  
            ;

        };
        
       

    }]);