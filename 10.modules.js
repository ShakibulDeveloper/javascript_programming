/*
    Modules:
        - JavaScript modules allow you to break up your code into separate files.
        and use them through export & import statement.
    Steps:
        01. Add type="module" in <script> tag to use import statement
        02. Export
        03. Import
    Example:
        (a js file)
            - export {name, age, myFunction};   //can export together
            const name = 'jhon';
            const age = 21;

            function myFunction(){

            }

            or

            export const name = 'jhon'; //can export individually.
            export const age = 21;

            export function myFunction(){

            }

        (another js file)
            - import {name, age} from './file_location';

            console.log(name);
            console.log(age);
            console.log(myFunction);

            - if we want to import everything from a file we can,
              import '../file_location';
*/