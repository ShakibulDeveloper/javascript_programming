/*
    constructor() is a method inside class
*/

class Calculator{
    num1 = 0;
    num2 = 0;

    constructor(param1, param2){
        this.num1 = param1;
        this.num1 = param2;
    }

    addNumber(){
        return this.num1+this.num2;
    }

    subNumber(){
        return this.num1-this.num2;
    }
}

let calculator = new Calculator(10, 30);

console.log(calculator.addNumber());