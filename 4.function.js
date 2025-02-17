/*
    Function:
        Piece of code that can be reuse.
    
    Function name should start with a verb (standard naming practise).

*/
function getMyFunction(parameter){
    console.log("hello world");
    console.log(2+2);
    console.log(parameter);
}

getMyFunction(123); // calling the function or running the function or executing the function.
getMyFunction('hi');

/*
    Anonymous Function:
        - A function without a name.
        - Since function is another type of value. We can store it in a variable also.

*/
const printHello = function(){
    console.log('HELLO');
}

console.log(typeof printHello);
console.log(printHello);
console.log(printHello.name);

//we can pass function into a function also.
function run(param){
    param();
}

run(function(){
    console.log("Passing function");
}); //this is called callback function.

/*
    setTimeout();
        - allow us to run a function in the future
        - run the function after a certain period of time once.
        - time calculate in millisecond. [1000 milisecond = 1sec].

    setInterval();
        - run function in future.
        - run after every certain period of time.

    clearInterval();
        - to stop the setInterval function.
*/
setTimeout(function(){
    console.log('Runned after 3sec');
}, 3000); //Asynchronous Code: won't wait for a line to finish before going to the next line.

setInterval(function(){
    console.log('Run after every 2sec');
}, 2000); //another asynchronous function

let setIntervalID = setInterval(function(){
    console.log('XYZ');
}, 5000);

clearInterval(setIntervalID);

/*
    Arrow Function:
        -shortcut way of writing a function.

*/
const myFunction = function(){
    console.log('ABC');
}

const myFunctionShortForm = () => {
    console.log('ABC');
};

/*
    you can use addEventListener() to define what to do after an event.
    you can add multiple event listener for a single event.
    Best practice:
        01. to use addEventListener() instead of onclick="".
        02. use arrow function in case of nameless function.
*/
const eventButtonElement = document.querySelector('.event-btn');

 eventButtonElement.addEventListener('click', () => {
    console.log('Clicked!');
 });

 
 //forEach() let us loop through an array.
 const fruits = ['mango', 'apple', 'jackfruit'];

 fruits.forEach((value, index) => {
    console.log(`${index} ${value}`);
 });

 //filter() Create a new array. return true add that value where return false will not put that value in the array.
console.log([1, -5, 10, 20].filter((value, index) => {
    if(value > 0){
        return true;
    }else{
        return false;
    }
}));

//map() Create a new array but does not remove or modify the original array.
console.log([5,8,9,1].map((value, index) => {
    return value + 1;
}));

