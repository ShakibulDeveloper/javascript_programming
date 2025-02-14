//typeof is used to check datatype in javascript
console.log(typeof 'Hello');
console.log(typeof 123);
console.log(typeof 2.2); //Output: number [typeof can count string, number, boolean].
console.log(typeof true);

//concatenation: combining strings together.
console.log('Hello' + 'World');
console.log('Hello' + 'World' + 'JS');

//type coercion: automatic type conversion in js
console.log('Hello' + 123); // here 123 will be automatically convert to string as computer read from left to right.
console.log('Hello' + 2 + 3); // Output: Hello23
console.log('Hello'+ (2+3)); //Output: Hello5

console.log('Hello \nWorld'); // Escape Charater: '\n' can be used for line break;

/* 
 String can be 3 types in Js
    01. '' => single quote
    02. "" => double quote
    03. `` => back-tick 
              [third one is also called as Template Strings.
                it has some extra special features compare 
                to normal string.
                01. We can put numbers inside this string quote using ${}.
                02. Mult-line  
              ]
*/

console.log('Hello'+ (2+2));
console.log("Hello" + (2+2));
console.log(`Hello ${2+2}`); //interpalation: to insert number directly into a string.