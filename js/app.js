'use strict';

var app = angular.module('quizApp', ['ui.router', 'ngResource', 'ui.bootstrap'])
    // Routing has been added to keep flexibility in mind. This will be used in future.
      .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
          $urlRouterProvider.otherwise('/');
          $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/quiz.html',
                controller: 'quizCtrl'
            })
      }])