/*
    Array:
        -another type of value.
        -represents a list of values.
        -array is also an object, it is a special type of object.

*/

const myArray = [10,20,30];
console.log(typeof myArray);
console.log(Array.isArray(myArray)); //to check if it is array or not.
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
myArray[0] = 100;
console.log(myArray);

myArray.push(500); //will add a element in array.
console.log(myArray);



const random = [5, 'hello', {'id':1, 'name': 'shakib'}, [60,70,60]];
console.log(random);


myArray.slice(0, 1); //remove a element from array. Here 0 in index number and 1 means 1 element will be remove.
console.log(myArray);

/*
    Loop: There are three types of loop

    01. for() => using in case of range
    02. while() => loop until condition becomes false;
    03. do while() => execute one loop first then follow condition. 

    for(range){
        keep looping
    }

    while(true){
        keep looping;
    }

    do{
        run first
        then keep looping
    } while(condition)

    - break; used to stop loop.
    - continue; used to keep continue looping
*/

for(let i=0; i< 10; i++){ // i short form of index.
    console.log(i);
}

let i = 0;
while(i< 5){
    console.log(`${i}. Hello World`);
    i++;
}


let x = 0;
do{
    console.log(`${x}.Do While Loop`);
    x++;
}while(x < 3);

/*
    Accumulator Pattern:
        1. create a variable to store result.
        2. loop through the array and update result.

*/

const nums = [5, 6, 8];
let total = 0;

for(let i=0; i < nums.length; i++){
    total += nums[i];
}

console.log(total);

/*
    slice() method:
        - take a saparate copy of an array.

*/

let array1 = [2,4,8];
let array2 = array1;

let array3 = array1.slice();

array2.push(12);
console.log(array1); //12 has been added in both array
console.log(array2); //12 has been added in both array

array3.push(14);
console.log(array1);
console.log(array2);
console.log(array3); //only array3 is updated now 



//TODO JS
const todoInputElement = document.querySelector('.todo-input');
const todoDateInputElement = document.querySelector('.date-input');

let todoArray = [];


renderTodoHTML();

function renderTodoHTML(){
    let todoListHTML = ``;

    for(let i=0; i < todoArray.length; i++){
        const todo = todoArray[i];
        let html = `<p>${todo.name} ${todo.date}  <button onclick="
        todoArray.splice(${i}, 1);
        renderTodoHTML();
        ">Delete</button></p>`;
        todoListHTML += html;
    }

    document.querySelector('.show-list').innerHTML = todoListHTML;
}

function addToArray(){
    todoArray.push({
        name: todoInputElement.value,
        date: todoDateInputElement.value,
    });
    todoInputElement.value = '';
    todoDateInputElement.value = '';

    renderTodoHTML();
}

