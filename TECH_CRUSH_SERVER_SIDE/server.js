// Step 1: Import the express module
const express = require("express") ; 
// what does require mean? It is a function that is used to import modules in Node.js. It takes the name of the module as an argument and returns the module's exports.

// Step 2: Create an Express application instance
const app = express();

const studentinfo = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Doe", age: 21, grade: "C"}  
]  // defining a students info. This is a javascript data.

app.get("/all-data", (req, res) => {
    res.json(studentinfo[0]); // This sends a JSON response back to the client with the first student's information.
});

// Step 3: Define a route handler for GET requests to the root URL ("/")
app.get("/", (req, res) => {
    res.send("Hello, World! Welcome to Express.js!"); // This sends a response back to the client with the message "Hello, World!"
});

app.get("/about", (req, res) => {
    res.send("This is the about page"); // This sends a response back to the client with the message "This is the about page"
});

app.get("/contact", (req, res) => {
    res.send("This is the contact page"); // This sends a response back to the client with the message "This is the contact page"
});

// Step 4: Start listening on port 3000 for incoming requests
app.listen(3000, () => {
    console.log("Server is up and running"); // This logs a message to the console when the server starts successfully.
});
