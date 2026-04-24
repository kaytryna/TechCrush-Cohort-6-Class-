//Types of Error
//1. Syntax Error
// console.log("Hello world" // this will throw a syntax error because of the missing closing parenthesis.

//2. Reference Error
// console.log(x); // this will throw a reference error because x is not defined.

//3. Type Error
// let num = 5;
// num.toUpperCase(); // this will throw a type error because toUpperCase is not a function that can be called on a number.


try{
    // the code that might throw an error goes here.
    let result = 10 / 0;
    console.log(result);
    undefinedFunction(); //This will cause an error because it is not defined.
    console.log("This line will not run!");// the try block is abandoned when an error occurs.
    } catch (error) {
        // This runs only when an error occurs in the try block.
        console.error("An error occurred: " + error.name, error.message); // This will log the error message to the console.
    } finally {
        // This runs regardless of whether an error occurred or not.
        console.log("This will always run!"); // This will run regardless of whether an error occurred or not.
    }

    console.log("This line of code outside the try-catch block continues to run!"); // This will run regardless of whether an error occurred or not.

