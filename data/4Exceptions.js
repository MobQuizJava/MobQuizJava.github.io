{
"quiz": {
"Id": 4,
        "name": "Exception Handling",
        "description": "Exception Handling Concepts"
        },
        "questions": [{
        "Id": 1010,
                "Name": "Which of following keyword is not a part of exception handling?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "try", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "finally", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "thrown", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "catch", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"In java ‘thows’ and ‘throw’ are keywords along with try, catch, finally. But thrown is not a keyword."
        },
        {
        "Id": 1011,
                "Name": "Which of these is a super class of all exception type classes?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "IOException", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "RuntimeException", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Throwable", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Cachable", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"All the exception types are subclasses of the built in class Throwable."
        },
        {
        "Id": 1012,
                "Name": "Which of this keyword must be used to monitor for exceptions?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "try", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "finally", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "throw", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "catch", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Try is used to monitor the code that may cause exception. If it is thrown, it is handled in catch block."
        },
        {
        "Id": 1013,
                "Name": "Which of this class is related to all the exceptions that can be caught by using catch?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Error", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Exception", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "RuntimeExecption", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "All of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Error class is related to java run time error that can’t be caught usually, Exception class and its derive exceptions can be caught using catch block."
        },
        {
        "Id": 1014,
                "Name": "Which of this keyword is used to manually throw an exception?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "try", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "finally", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "throw", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "catch", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"In java ‘throw’ is keyword which is used to throw an exception explicitly. Can be used with built in as well as user defined exceptions."
        },
        {
        "Id": 1015,
                "Name": "Which of these keywords is used to indicate that exception should be handled by caller.",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "try", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "throw", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "throws", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "catch", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"If a method is capable of causing an exception that it does not handle. It must specify this behaviour, so that callers of the method can guard themselves against that exception. This is done by using throws clause in methods declaration."
        },
        {
        "Id": 1016,
                "Name": "When does Exceptions in Java arises in code sequence?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Run Time", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Compilation Time", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Can Occur Any Time", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Exception are runtime errors that terminated the program abruptly."
        },
        {
        "Id": 1017,
                "Name": "User defined exception class can be created by",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Implementing Throwable", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Extending Exception", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Extending Object class", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"To create a user defined exception we have to extend the class from Exception class."
        },
        {
        "Id": 1018,
                "Name": "Choose wrong syntax among following code snipets.",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "try { } catch(Exception e) { }", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "try { } finally{ }", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "try { } finally{ } catch(Exception e){ }", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "try { } catch(Exception e){ } finally{ }", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":""
        },
        {
        "Id": 1019,
                "Name": "Exceptions are categorised into",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Checked and unchecked", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "IO and Non IO", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Java and Non Java", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":""
        }
        ]
}