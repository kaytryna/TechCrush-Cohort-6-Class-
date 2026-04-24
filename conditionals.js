//if-else statements
let userAge = 21;
if  (userAge >= 18){ // comparison operator
    console.log("Welcome to club 9ja") // the if block runs here.
}else {
    console.log("Sorry, you are not allowed to enter")
}

 userAge = 16; // note the use of variable reassignment here;
if  (userAge >= 18){
    console.log("Welcome to club 9ja")
}else {
    console.log("Sorry, you are not allowed to enter") // the else block runs here.
}

let gender = "male";
if (gender === "female"){
    console.log("Welcome to the female section")
}else if (gender === "male"){
    console.log("welcome to the male section")
}else if (gender === "other"){
    console.log("welcome to the other section") 
} else {
    console.log("we don't know where you belong")
    }

    let username = "";
    let password = "";
    if (username === "katherine" && password === "123"){
        console.log("login successful")
    }else if (username === "katherine" || password === "123"){
        console.log("username or password is correct")
    }else {
        console.log("login failed")
    }

    username = "katherine";
    password = "";
    if (username === "katherine" && password === "123"){ // logical operator 
        console.log("login successful")
    }else if (username === "katherine" || password === "123"){ // logical operator
        console.log("username or password is correct")
    }else {
        console.log("login failed")
    }

     username = "katherine";
     password = "123";
    if (username === "katherine" && password === "123"){
        console.log("login successful")
    }else if (username === "katherine" || password === "123"){
        console.log("username or password is correct")
    }else {
        console.log("login failed")
    }

    let voterAge = 18;
    if (voterAge >= 18){
        console.log("you are eligible to vote")
    }else {
        console.log("you are not eligible to vote") 
    }