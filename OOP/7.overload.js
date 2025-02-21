/*
    Overload:
        - writing same method multiple time in a class.
        - in c++ or java or any other related language we can do that like this way:
            
            class MyClass{
                getName(param1, param2){};
                getName(param1, param2, param3){};
            }
        
        - but in javascript, we cannot directly do that. Instead we can do in this way.

*/

class Calculator{
    static addNumber(param1, param2, param3){
        if(arguments.length == 2){
            console.log(`Two param passed: ${param1}, ${param2}`);
        }else if(arguments.length == 3){
            console.log(`Three param passed: ${param1}, ${param2}, ${param3}`);
        }
    }
}

Calculator.addNumber(1,2);
Calculator.addNumber(4,6,8);