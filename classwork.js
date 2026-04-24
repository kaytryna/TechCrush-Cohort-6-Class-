// classwork

const msg = "  Hello, World! ";

// Remove extra spaces;
const trimmedmsg = msg.trim();
console.log(trimmedmsg);

// check if it starts with Hello;
const startsWithHello = msg.startsWith("Hello");
console.log(startsWithHello);

// check if it ends with World;
const endsWithWorld = msg.endsWith("World!");
console.log(endsWithWorld);

// Convert to lowercase;
const lowerCasemsg = msg.toLowerCase();
console.log(lowerCasemsg);

//replace World with Nigeria;
const replacedmsg = msg.replace("World", "Nigeria");
console.log(replacedmsg);

//replace all L with 1;
const replacedAllmsg = msg.replaceAll("L", "1");
console.log(replacedAllmsg);

// slice the string from 3 to 8;
const slicedmsg = msg.slice(3, 8);
console.log(slicedmsg);