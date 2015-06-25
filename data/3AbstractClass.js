{
"quiz": {
"Id": 3,
        "name": "Abstract class,Interfaces,final keyword,Polymorphism",
        "description": "Abstract Classes, Interfaces & Polymorphism"
        },
        "questions": [{
        "Id": 1010,
                "Name": "Which of this keyword is used to define an abstract class?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "abst", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "abstract", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Abstract", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "abstract class", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"In java, 'abstract' keyword is used to declare abstract class or methods."
        },
        {
        "Id": 1011,
                "Name": "Which of this is incorrect?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Abstract class can be inherited", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Abstract method does not have body", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Object creation of abstract class is not possible with new keyword", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Each abstract class must have at least one abstract method.", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"It is possible syntactically, to have an abstract class without any abstract method."
        },
        {
        "Id": 1012,
                "Name": "If a class inheriting an abstract class does not define all of its abstract function then it will be known as?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "abstract", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "A simple class", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Static class", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Any subclass of an abstract class must either implement all of the abstract method in the superclass or be itself declared abstract."
        },
        {
        "Id": 1013,
                "Name": "Which of the following is not a correct statement?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Every class containing abstract method must be declared abstract.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Abstract class defines only the structure of the class not its implementation.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Interfaces can be initialized by new operator.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Interface can be empty.", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Interface cannot be directly initiated with new operator. Since Interface does not contain any definition or implementation it is not possible to create an Interface object."
        },
        {
        "Id": 1014,
                "Name": "Protected data can't be accessed in",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Same package", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Same class", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Inherited classes", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Non inherited classes outside package", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Protected data is available in same package and for inherited classes outside packages."
        },
        {
        "Id": 1015,
                "Name": "Which of following access specifiers can be used for an interface?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "public", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "protected", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "private", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "All of the above", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Access specifier of interface is either public or no specifier. When no access specifier is used then default access specifier is used due to which interface is available only to other members of the package in which it is declared, when declared public it can be used by any code."
        },
        {
        "Id": 1016,
                "Name": "Which of this access specifies can be used for a class so that its members can be accessed by a different class in the same package?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "public", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "protected", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "No Modifier", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "All of the above", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Either we can use public, protected or we can name the class without any specifier to make its content available in same package."
        },
        {
        "Id": 1017,
                "Name": "To stop class A from inheriting class B we have to",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Make class B as final", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Make class A as final", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Make class B as abstract", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Not possible to stop inheritance", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Marking a class as final indicates it canâ€™t be sub-classed  i.e. It canâ€™t be inherited."
        },
        {
        "Id": 1018,
                "Name": "If a class Employee is inside com.company package and need to be instantiated outside package then it can be accessed as:",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "com.company.Employee e=new com.company.Employee();", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "new com.company.Employee();", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Employee e=new Employee();       //Employee need to be imported from com.company", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "All of above", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Import can be used to avoid each time mentioning about packgname.classname.So all above mentioned options are correct."
        },
        {
        "Id": 1019,
                "Name": "Which of following can be written in an interface",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "public variable", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "private variable", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "constructor", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "static methods", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Interface can have only public ,static,final variables and public,abstract methods."
        },
        {
        "Id": 1020,
                "Name": "class 'Base' is extending from a class 'Derive' and implementing an interface 'C'. Choose right syntax to create class Base.",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "class Base implements C", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "class Base extends Derive implements C", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "class Base implements C extends Derive", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "class Base extends Derive, implements C", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"In inheritance structure, extends keyword should be used first then implements in class declaration."
        },
        {
        "Id": 1021,
                "Name": "Choose correct combination from following (where A and B are classes and C,D are interfaces)",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "class A extends class B", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "interface C extends D", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "class A implements C,D", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "All are correct", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Class extends another class and implements multiple interfaces. But one interface can extend another interface."
        }
        ]
}