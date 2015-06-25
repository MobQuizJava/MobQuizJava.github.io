{
"quiz": {
"Id": 2,
        "name": "Control structures, Inheritance, Static members",
        "description": "Control Structures & Inheritance"
        },
        "questions": [{
        "Id": 1010,
                "Name": "Which of this keyword must be used to inherit a class?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "super", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "this", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "extend", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "extends", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"In Java,extends is the keyword used to achieve inheritance."
        },
        {
        "Id": 1011,
                "Name": "Which of this keyword is used to refer to member of base class from a sub class?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "upper", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "super", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "this", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"In Java ,super keyword is used to access any super class member."
        }, {
        "Id": 1012,
                "Name": "A private member of base class can be accessed in derive class as",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Through super keyword", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Trough base keyword", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Through creating object of base class", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"None of the above"
        }, {
        "Id": 1013,
                "Name": "Which of these is correct way of inheriting class A by class B?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "class B + class A { }", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "class B inherits class A { }", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "class B extends A { }", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "class B extends class A { }", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Right syntax to achieve inheritance is class base_class extends derive_class."
        }, {
        "Id": 1014,
                "Name": "Which of the following statement is incorrect?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "public members of class can be accessed by any code in the program.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "private members of class can only be accessed by other members of the class.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "static methods can be overridden.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "static methods can be overloaded.", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Static methods are common for all objects of class. They are class methods. They can be rewritten in derive class but can't be overridden."
        }, {
        "Id": 1015,
                "Name": "What is the process of defining a method in subclass having same name & type signature as a method in its superclass?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Method overloading", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Method overriding", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Method hiding", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Process of redefining the base class method with same signature in derive class is called Method Overriding."
        }, {
        "Id": 1016,
                "Name": "Which of following is incorrect?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Static blocks are executed before main method", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Constructors can be overloaded", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "We can have multiple static blocks in one class", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Garbage collection need to execute explicitly by programmer", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Garbage collection is an automate process in java which is executed internally. Programmer can't force GC to execute."
        }, {
        "Id": 1017,
                "Name": "What is process of defining two or more methods within same class that have same name but different parameters declaration?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Method overloading", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Method overriding", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Method hiding", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Process of having methods with same name but different parameter is called as method overloading."
        }, {
        "Id": 1018,
                "Name": "Which of this is used to access member of class before object of that class is created?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "public", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "private", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "static", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "protected", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Static member of class can be accessed even before object is created. As its common for a class."
        }
        ]
}