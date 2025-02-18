/*
    Objects:
    A object can hold multiple values inside.

    We can write objects in 3 ways.
        01. object literal
        02. object instance
        03. object constructor
*/

// object literal
let person = {
    id: 123,
    name: 'Jhon',
    worksAt: function(){ //for anomonous function we can even write in arrow function () => {}.
        return 'google';
    },
    skills: ['c/c++', 'php', 'js'],
    projects: {shopup:'ecomerce project', todo:'mobile app'},
};

console.log(typeof person);
console.log(person);
console.log(person.id);
console.log(person.worksAt());
console.log(person.skills);
console.log(person.projects.shopup);

//object instance
let person2 = new Object(); //declared a object

person2.id = 123;
person2.name = 'Jhon';
person2.worksAt = function(){
    return 'google';
};
person2.skills = ['c/c++', 'php', 'js'];
person2.projects = {shopup: 'ecommerce project', todo: 'mobile app'};

console.log("Object Instance");
console.log(typeof person);
console.log(person);
console.log(person.id);
console.log(person.worksAt());
console.log(person.skills);
console.log(person.projects.shopup);


//object constructor
function Person(){
    this.id = 123; //instead Person.id = 123, we can write this.id = 123
    this.name = 'Jhon';
    this.worksAt = function(){
        return 'google';
    }
    this.skills = ['c/c++', 'php', 'js'];
    this.projects = {shopup: 'ecommerce project', todo:'mobile app'};

}

let person3 = new Person();

console.log("Object constructor");
console.log(typeof person3);
console.log(person3);
console.log(person3.id);
console.log(person3.worksAt());
console.log(person3.skills);
console.log(person3.projects.shopup);