/*
    localStorage is a built-in Object in Javascript to save any value in local.
    LocalStorage only support String.
*/

    localStorage.setItem('message', 'hello'); // set value
    console.log(localStorage.getItem('message')); // get value
    localStorage.removeItem('message'); //delete or remove
    console.log(localStorage.getItem('message'));