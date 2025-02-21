/*
    Encapsulation:
        - to wrap or group data or actions together.
        - Hide data or actions.
    
    In JS, we can do encapsulation in 3 ways
        01. Encapsulation using closures.
        02. Using constructor function.
        03. Using ES6 classes.

*/

//USING CLOSURES
function createCounter(){
    let count = 0;
    
    return{
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        } ,
        getCount: function(){
            return count;
        }
    }
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.count); //become private


//USING CONSTRUCTOR
function CounterTwo(){
    let count = 0;

    this.increment = () => {
        count++;
    }

    this.decrement = () => {
        count--;
    }

    this.getCount = () => {
        return count;
    }
}

let counterTwo = new CounterTwo();
counterTwo.increment();
counterTwo.increment();
counterTwo.decrement();
console.log(counterTwo.getCount());


//USING ES6 CLASS
class Counter{
    #count = 0; 

    increment(){
        this.#count++;
    }

    decrement(){
        this.#count--;
    }

    getCount(){
        return this.#count;
    }
}

let counter2 = new Counter()
counter2.increment();
counter2.increment();
counter2.decrement();
console.log(counter2.getCount());