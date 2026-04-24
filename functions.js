// functions
// function functionname(){
//     // code to be executed
// }

function greet(){
    console.log("Welcome back, Katherine!");
}

greet(); // calling the function

function farewell(name){
    console.log("See you again" + name);
}

farewell(" Katherine"); // calling the function with an argument

function add (){ // static function; the parameters have been predetermined within the function block.
    let a = 5;
    let b = 10;
    console.log (a);
    console.log (b);
    return (a + b);;
}

console.log (add());

function addition (a, b){ // this is a dynamic function; the parameters are flexible as they are provided in the console.log statement.
    return (a + b);
}
console.log (addition(3, 10));

function isAdult(age){ // this is also a dynamic function;
    return age >= 18;
}

console.log(isAdult(20));
console.log(isAdult(15));
console.log(isAdult(18));
console.log(isAdult(13));