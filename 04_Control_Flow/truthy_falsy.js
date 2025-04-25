// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = [];

if (userEmail) {
  console.log("Got user email"); // this part is execute
} else {
  console.log("Don't have user email");
}

// for empty object

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}



// Nullish Coalescing Operator ??

// The Nullish Coalescing Operator (??) in JavaScript is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined

// Syntax
// let result = expression1 ?? expression2;

// --> expression1: The value to be checked for null or undefined.
// --> expression2: The value to return if expression1 is null or undefined.

let user = null;
let defaultUser = "Guest";

let currentUser = user ?? defaultUser;
console.log(currentUser); // Output: Guest

// Use-Cases

// 1. Setting Default Values

function getUserName(name) {
  return name ?? "Anonymous";
}

console.log(getUserName(null)); // Output: Anonymous
console.log(getUserName(undefined)); // Output: Anonymous
console.log(getUserName("Ayush")); // Output: Ayush

// 2. Handling Optional Configuration

let config = {
  timeout: 0,
};

let timeout = config.timeout ?? 5000;
console.log(timeout); // Output: 0

// if timeout is null or undefined then timeout ==> 5000

// Logical OR (||) Operator

// syntax
// result = expression1 || expression2;

// --> expression1: The first expression to be evaluated.
// --> expression2: The second expression to be evaluated if expression1 is falsy.

// basic example

let a = true;
let b = false;

let result = a || b;
console.log(result); // Output: true

// Providing Default Values

let user1 = "";
let defaultUser1 = "Guest";

let currentUser1 = user || defaultUser1;
console.log(currentUser1); // Output: Guest

// Chaining Multiple OR Conditions

// Syntax
// let result = expression1 || expression2 || expression3;

// The first "truthy" value is returned, or if none are truthy, the last value is returned.

a = null;
b = 0;
let c = "Hello";

result = a || b || c;
console.log(result); // Output: "Hello"

// Using with function

function greet(name) {
  name = name || "Guest";
  console.log("Hello, " + name);
}

greet("Ayush"); // Output: Hello, Ayush
greet(); // Output: Hello, Guest
