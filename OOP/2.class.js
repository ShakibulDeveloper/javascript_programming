/*
    Through Class and Object seems similar or act similar but 
    class is not a object.
    class is a template of object that helps to create object.
*/

class Person{

    constructor(){};

    id = 123;
    name = 'jhon';
    
    worksAt(){
        return 'google';
    };

    skills = ['c/c++', 'php', 'js'];
    projects = {shopup: 'ecommerce project', todo: 'mobile app'};
}

let person = new Person();
console.log(person);
console.log(person.id);
console.log(person.worksAt());
console.log(person.skills);
console.log(person.projects.shopup);