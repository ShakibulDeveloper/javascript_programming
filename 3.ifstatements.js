/*
    ==  means both sides value are same or not.
    === means both sides type and value are same or not.

    Similarly,

    != not equals to indicate only value.
    !== not equals to indicate both type and value.

*/

if(true){
    console.log('true'); //branch
}else{
    console.log('false');   //branch
}

/*
    code inside if/else statements body are called branches
    else{} is optional 
*/


/* 
    we can skip {} curly braces if there is only a single 
    line of code or branch inside if/else statements.

*/

if(true) 
    console.log(true);
else
    console.log(false);


/* 
    Scope is a region that limits where a variable exists.
    It helps us to avoid naming conflicts.
*/

const age = 12; //global variable

if(true){
    const age = 15; //local variable
}

/*
    we can access global variable or scope any where if needed but
    we can access local variable or scope only inside {} area.
    here the variable 'age' outside and inside are not same they are
    two separate variables. 
*/

/*
    Falsy Values:
        false, 0, '', NaN, undefine, null.
    
    Truthy Values:
        any value except those falsy values are truthy values.

*/

if(!0){
    console.log('falsy');
}else{
    console.log('truthy');
}

/*
    short-cut for if-statements
        01. Ternary Operators ? :
            
            if(condition){

            }else{

            }

        02. Guard Operator &&

            if(condition){

            }

        03. Default Operator ||

            if(!condition){

            }

*/

3 > 2 ? console.log(true) : console.log(false);

3 > 2 && console.log('okay');

!3 > 2 || console.log('okay');