/*
    Inheritance:
        - creating relationship between parent and child classes.
        - child class can access all propertices/methods of parent class as inherit.
*/

class Father{
    fatherName = "Father";

    constructor(){
        console.log("this is father class constructor method");
    };

}

class Son extends Father{   //extends keyword used for build relation
    sonName = "Son";

    constructor(){
        super();// this method helps to separate son class constructor() from father class constructor()
        console.log("This is son class constructor method");
    };

}

let father = new Father();
console.log(father.fatherName); //parent class can only access it's own properties/methods

let son = new Son();
console.log(son.fatherName); //child class can access both parent and it's own properties/mrthods  
console.log(son.sonName);


/*
    Override:
        - to change value of any property/method of parent class in child class.
*/

class Animal{
    eye = 2;
    leg = 2;
}

class Cow extends Animal{
    leg = 4;    //override value
}

let cow = new Cow();
console.log(cow.eye);
console.log(cow.leg);