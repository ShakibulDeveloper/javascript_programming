/*
    DOM: Document Object Model
        - another built-in object in javascript.
        - represent or models the webpage.
        - combines javacript and HTML together.

*/

console.log(document.body.innerHTML);
// document.body.innerHTML = `<h1>Hello World!</h1>`;

console.log(document.title);
document.title = 'Hello World';

console.log(document.querySelector('button').innerHTML); // to select any specific html element.
document.querySelector('button').innerHTML = 'Sign up';

console.log(document.querySelector('.login-btn').innerHTML);
document.querySelector('.login-btn').innerHTML = 'Create Account';

function getInputValue(){
    inputElement = document.querySelector('#name');
    console.log(inputElement.value); // whenever we get a value from input in DOM, the value will be a string.
    console.log(typeof inputElement.value);
    console.log(typeof Number(inputElement.value)); //Number() can convert string to number.
}


function getOnTyping(event){
    console.log('typing');
    console.log(document.querySelector('#name').value);

    inputElement = document.querySelector('#name').value;
    document.querySelector('p').innerHTML = inputElement;

    console.log(event); // event object used to know which key is pressed.

    if(event.key == "Enter"){
        console.log("You have Pressed Enter");
    }

    /*
        Events: means doing an action.
            - clicks, keydown etc are events
        
        Event Listeners: are the attributes.
            - onclick, onkeydown etc are event listeners.
        
        [Some list of Event Listeners]
            01. onclick => click
            02. onkeydown => key press
            03. onscroll => scrolling
            04. onmouseenter => hovering over
            05. on mouseleave => stop hovering over
            and many more..
    */
}


/*
    you can add or remove class using 
        - classList.add()
        - classList.remove()
*/

function subscribe(){
    subscribeButtonElement = document.querySelector('.subscribe-btn');

    if(subscribeButtonElement.innerHTML == 'Subscribe'){
        subscribeButtonElement.innerHTML = 'Subscribed';
        subscribeButtonElement.classList.add('active')
    }else{
        subscribeButtonElement.innerHTML = 'Subscribe';
        subscribeButtonElement.classList.remove('active');
    }
}