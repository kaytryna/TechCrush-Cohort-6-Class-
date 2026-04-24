// length method
let stringText = "This is a class on string methods"
console.log(stringText.length);

// toUpperCase and toLowerCase methods
let capitalLetter = stringText.toUpperCase();
let smallletter = stringText.toLowerCase();
console.log(capitalLetter);
console.log(smallletter);


// trim method
let str = "    Hello World! ";
let trimmedStr = str.trim();
let fronttrimmedStr = str.trimStart();
let endtrimmedStr = str.trimEnd();
console.log(trimmedStr);
console.log(fronttrimmedStr);
console.log(endtrimmedStr);


// why trim is important in user input; for example, when a user signs up or signs in, they may accidentally add spaces before or after their username. Using the trim method can help ensure that the input is clean and matches the expected format, preventing issues with authentication or data storage.
let signUpName = "   Katherine" //note the variation in input for sign-in and sign-up.
let signInName = "Katherine"

if ((signUpName.trim()) === signInName) {
    console.log("Welcome back,Katherine!");
} else {
    console.log("Invalid details provided, please try again.");
}


// indexOf() and include() methods
let user_email = "katherine@example.com";
let email_index = user_email.indexOf("@");
console.log(email_index); 
email_index = user_email.indexOf("er");
console.log(email_index);
email_index = user_email.indexOf("413"); // note the use of reassigning here;
console.log(email_index); 

let email_contains_at = user_email.includes("@");
console.log(email_contains_at);
email_contains_at = user_email.includes("413");
console.log(email_contains_at);


// startsWith() and endsWith() methods
let userName = "TechCrush Katherine";

let starts = userName.startsWith("TechCrush");
console.log(starts);

let ends = userName.endsWith("Katherine");
console.log(ends);

//slice() and substring() methods
let testString = "my name is Katherine";
let slicedString = testString.slice(0,8);
let substringString = testString.substring(0,8);
console.log(slicedString);
console.log(substringString);


//replace () and replaceAll() methods
let statement = "Katherine is a software developer. Katherine loves coding.";
let replacedText = statement.replace("Katherine", "She");
let replacedAlltext = statement.replaceAll("Katherine", "She");
console.log(replacedText);
console.log(replacedAlltext);

// split() method
const sentence = "LANGUAGES: JavaScript, Python, Java, C++";
let splitSentence = sentence.split(",");
console.log(splitSentence);
splitSentence = sentence.split("a");
console.log(splitSentence);
let myname = "Katherine";
let splitName = myname.split("t");
console.log(splitName);

//