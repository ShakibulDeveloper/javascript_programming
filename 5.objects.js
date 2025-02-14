/*
    Objects:
    A object can hold multiple values inside.

*/

const product = {
    'name': 'Phone',
    'price': 15000,
}

console.log(product);
console.log(product.name);
console.log(product.price);

//we can update values in object
product.price = 16000;
console.log(product);

//we can add new property in object
product.quantity = 10;
console.log(product);

//we can delete or remove a property from object
delete product.price;
console.log(product);

/*
    In objects:
    we can hold any type of values even a function.
    Function inside an object is called Method.

    We can also hold objects inside object.

*/


const customer = {
    'id': 1,
    getProduct: function(){
        return 'your products';
    },
    'rating': {
        'product1': 5,
        'product2': 4.5,
    }
}

console.log(customer);
console.log(customer.getProduct());
console.log(customer.rating);

/*
    Json is similar to javascript object but has less feature.
    Json Object cannot hold function like Javascript Object.
    Json stands for Javascript Object Notation.
    JSON is a built-in Object in Javascript. 

*/

console.log(customer);
console.log(JSON.stringify(customer)); //covert Javascipt Object to Json Object.
console.log(JSON.parse(JSON.stringify(customer))); //convert Json Object to Javascipt Object.