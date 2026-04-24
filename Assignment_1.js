// Online Bookstore Order

//Task 1: Create Variables
const customerName = "Katherine"; // const is used since the name is constant
const customerAge  = 24;
let bookTitle = "The Girl Entrepreneur"; //Let is used since the customer has the choice to select or deselect books in a bookstore.
let bookPrice = 2000; // This is also subject to change as a result of economic constrainsts.
let quantity = 3; // The customer has the power to choose the quanitity to be purchased.
let isStudent = true; // the customer can either be a student or not.

//Task 2: Use Arithmetic Operators.
let totalPrice = bookPrice * quantity; // This is the total price of the books to be purchased.

//Task 3: Use Comparison Operators.
let isAdult = customerAge >= 18; // is the customer greater than or equal to 18 years.
let buyingManyBooks = quantity > 3; // id the quantity of ordered books more than 3?
let isBookFiveThousand =bookPrice === 5000; //is the price of the book equal to 5000?

// Task 4: Use a Non-primitive Data type
const customerOrder = {customerName : "Katherine", bookTitle: "The Girl Entrepreneur", quantity: 3, totalPrice: quantity * bookPrice,}; // This is an object that contains the details of the customer's order.

// Task 5: Print the Results.
console.log(customerName);
console.log(bookTitle);
console.log(totalPrice);
console.log(isAdult);
console.log(buyingManyBooks);
console.log(isBookFiveThousand);

//console.log(customerOrder);
