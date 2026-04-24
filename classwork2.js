//question 1: using the map method, create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5];

// solution
const new_numbers = numbers.map(number => number*2);
console.log(new_numbers);

// question 2: return scores greater than or equal to 300
const scores = [250, 300, 350, 200, 400, 180, 160];

//solution
const new_scores = scores.filter(score => {
    return score >=300;
} );
console.log(new_scores);

// question 3: get me sum of all items in the array
const sum = [2000, 3000, 400, 100, 600]

// solution

total = sum.reduce((acc, value) => {
    return acc + value;
}, 0);
console.log(total);

// question 4: add "green" to the end of the array and remove "red" from the array
const colours = ["blue", "yellow", "red"];

// solution
const removed_colour = colours.pop("red");
console.log(removed_colour);
console.log(colours);

const new_colours = colours.push("green");
console.log(colours);


