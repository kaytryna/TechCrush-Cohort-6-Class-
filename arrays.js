//Array methods

//forEach methods

let fruits = ["apple", "banana", "orange", "grape", "mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.forEach(function(fruit) {
    console.log("i eat " + fruit);
});


// map method
let scores = [90, 85, 78, 92, 88];  
let newScores = scores.map(score => score + 5);
console.log(newScores); 
console.log(scores);

// filter method
let jambScores = [200, 250, 150, 120, 320,180, 300, 220];
let passed = jambScores.filter(score => {
    return score >= 200;
});
console.log(passed);


//find method
const studentsNames = ["James", "John", "Peter", "Matthew", "Luke", "Thomas", "John"];
const found = studentsNames.find((name)=>{
    return name === "John"
});
console.log(found)

// reduce method
let cartprices = [15000, 20000, 15000, 25000, 35000];
// named fuction method
let total = cartprices.reduce(function(acc, currentprice){
    return acc + currentprice;
}, 0) // zero is the initial state at the begining of the operation

console.log (total); // acc is the previously accumulated item in an array, while currentprice is the next item in the array to be summed with the previously accumulated items


// arrow function method
 total = cartprices.reduce((acc, currentprice) => {
    return acc + currentprice;
 }, 20000); // zero is the initial state at the begining of the operation.
 console.log(total);


// push, pop, shift and unshift methods

let colours = ["red", "blue", "green"];
colours.push ("purple");
console.log(colours);

let lastcolour = colours.pop();
console.log (lastcolour);
console.log (colours);

let firstcolour = colours.shift();
console.log (firstcolour);
console.log (colours);

let newcolours = colours.unshift("yellow")
console.log(newcolours); // gives the new length of the array after the parameter has been added to the begining.
console.log(colours);



 
