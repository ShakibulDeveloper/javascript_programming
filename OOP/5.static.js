/*
    static:
        - this keyword help us to get a property/method inside a class without
        creating an object.

*/

class Person{
    static id = 4533;
    name = "jhon";

    static getName(){
        return this.name;
    }
}

console.log(Person.id);
console.log(Person.getName);

