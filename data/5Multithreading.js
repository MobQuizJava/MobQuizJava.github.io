{
"quiz": {
"Id": 5,
        "name": "Multithreading",
        "description": "Multithreading Concepts"
        },
        "questions": [{
        "Id": 1010,
                "Name": "What is the name of the method used to make a new thread ready for execution?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "init();", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "start();", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "run();", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "resume();", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"The start() method causes thread to enter into runnable state. After which O.S. calls run, to execute the thread actually."
        },
        {
        "Id": 1011,
                "Name": "Which two are valid constructors for Thread?\\n1. Thread(Runnable r, String name)\\n2. Thread()\\n3. Thread(int priority)\\n4. Thread(Runnable r, ThreadGroup g)\\n5. Thread(Runnable r, int priority)",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "1 and 3", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "2 and 4", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "1 and 2", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "2 and 5", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"(1) and (2) are both valid constructors for Thread."
        },
        {
        "Id": 1012,
                "Name": "Which three are methods of the Object class?\\n1. notify();\\n2. notifyAll();\\n3. isInterrupted();\\n4. synchronized();\\n5. interrupt();\\n6. wait(long msecs);\\n7. sleep(long msecs);\\n8. yield();",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "1, 2, 4", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "2, 4, 5", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "1, 2, 6", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "2, 3, 4", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"(1), (2), and (6) are correct. They are all related to the list of threads waiting on the specified object. i.e. Synchronization."
        },
        {
        "Id": 1013,
                "Name": "Which code from the following, will genrate compiler error if MyThread extends from Thread class.",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "MyThread t=new MyThread();", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Thread t=new MyThread();", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Runnable t=new MyThread();", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "MyThread t=new Thread();", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"It is only possible to use base class reference to create derive class object. Vice versa is not true."
        },
        {
        "Id": 1014,
                "Name": "Which two of the following methods are defined in class Thread?\\n1. start()\\n2. wait()\\n3. notify()\\n4. run()\\n5. terminate()",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "1 and 4", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "2 and 3", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "3 and 4", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "2 and 4", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"(1) and (4). Only start() and run() are defined by the Thread class."
        },
        {
        "Id": 1015,
                "Name": "Which three guarantee that a thread will not be active for particular time period and will be automatically runnable after time is elapsed?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "yield()", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "wait()", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "notify()", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "sleep(1000)", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Sleep makes thread paused for particular time, after which it will be automatically enter into runnable state."
        },
        {
        "Id": 1016,
                "Name": "Select right way of setting priorities to thread.",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "t1.setPriority(11);", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Thread.setPriority(9);", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "t1.setPriority(MAX_PRIORITY);", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "t1.setPriority(Thread.MAX_PRIORITY);", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"The setPriority() accepts an integer between 1 to 10 or constant from Thread class to change priority of thread class."
        },
        {
        "Id": 1017,
                "Name": "Which method must be defined by a class implementing the java.lang.Runnable interface?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "void run()", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "public void run()", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "public void start()", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "void run(int priority)", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Option 2  is correct because in an interface all methods are abstract by default therefore they must be overridden by the implementing class. The Runnable interface only contains 1 method, public void run() which must be overridden by a thread. "
        },
        {
        "Id": 1018,
                "Name": "Assume the following method is properly synchronized and called from a thread A on an object B:\\nwait(2000);\\nAfter calling this method, when will the thread A become a candidate to get another turn at the CPU?",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "After thread A is notified, or after two seconds.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "After the lock on B is released, or after two seconds.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Two seconds after thread A is notified.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Two seconds after lock B is released.", "IsAnswer": false }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Either of the two events (notification or wait time expiration) will make the thread become a candidate for running again. Thus either notify A or after 2 msec it will automatically enter into runnable state."
        },
        {
        "Id": 1019,
                "Name": "Synchronization is",
                "QuestionTypeId": 1,
                "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "A way to achieve implicit locking and unlocking of threads", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A way to ensure that data corruption doesn’t happen", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Implemented by using synchronized block and synchronized method.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "All of the above", "IsAnswer": true }],
                "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true },
                "Description":"Synchronization is basically used to ensure data integrity in multithreading. Can be used with synchronized method or block to do the locking and unlocking of data."
        }]
}