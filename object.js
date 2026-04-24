//objects
let object = {
    name : "Katherine",
    age : 20, // don't forget to use comma
    department : "Chemistry",
    role: "Graduate assistant"
}

// how to access the values in an object
console.log (object.name); // dot notation
console.log (object["name"].toLowerCase()); // bracket notation

// destructuring: easier than using dot or bracket notation
const {name, age, department, role} = object; // note the use of square brackets here.
console.log(name); // the key is called directly without using the variable name; it makes the code neater.
console.log(age);
console.log(department);
console.log(role); // conaole.log(object.role) would have been used for dot notation
// without destructuring
let newName = object.name;
let newAge = object.age;
let newDepartment = object.department;
let newRole = object.role;
console.log(newName);
console.log(newAge);
console.log(newDepartment);
console.log(newRole);

// renaming keys in an object
let {role: position} = object; // renaming role to position;
console.log(position.toUpperCase()); // the key is called position instead of role, but it is still referencing the value of role in the object.
console.log(object); // the old key remains unchanged in the original object.


//spread and rest operators.

// spread operators merge items from an object into another object.
let old_object = {
    name : "Katherine",
    age : 21, 
    department : "Chemistry",
    role: "Graduate assistant"
}

let new_object = {
    ...old_object, // this is the spread operator that merges the items from old_object into new_object.
    new_role: "Assistant Lecturer", 
}
console.log(new_object); // the new object contains all the items from the old object and the new item added to it.

// rest operator
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First element:", first); // First element: 1
console.log("Second element:", second); // Second element: 2
console.log("Rest of the elements:", rest); // Rest of the elements: [3, 4, 5]

// iterating over objects
const user = {
    name : "Katherine",
    password : "12345",
    isFemale : true,
    city : "Ibadan",
    age : "24"
}

//for...in: used for both keys and values.

for (let key in user) {
    console.log(" these are the keys" + key); 
    console.log(" these are the values" + user[key]); 
}

for (let values in user){
    console.log (" these are the values: " + values);
    console.log (" these are the keys: " + user[values]);
}

// object.keys,
console.log(Object.keys(user)); // returns an array of the keys in the object

// object.values,
console.log(Object.values(user)); // returns an array of the values in the object

// object.entries,
console.log(Object.entries(user)); // returns an array of key-value pairs in the object