/*
    setter method used to set value
    getter method used to get value

    get or set will convert methods into properties.
*/

class Product{
    constructor(){}

    set setProductPrice(value){
        this.price = value;
    }

    get getProductPrice(){
        return this.price;
    }
}

let product = new Product();

product.setProductPrice = 100;
console.log(product.getProductPrice); 