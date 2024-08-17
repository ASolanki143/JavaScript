// Type of Normal Functions

// 1. Function Declaration

// --> The function is hoisted, meaning it can be called before it's defined in the code.
// --> It has a name, which can be used to reference the function.

console.log(add(2, 3)); // output : 5

function add(a, b) {
  return a + b;
}

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ayush")) // output : Ayush just logged in
console.log(loginUserMessage()) // output : sam just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(100 , 200 , 300 , 400)) // output : [ 300, 400 ]

// console.log(calculateCartPrice(200, 400, 500, 2000))

// 2. Function Expression

// function expression involves defining a function and assigning it to a variable.
// --> Function expressions can be named or anonymous.
// --> They are not hoisted, so they must be defined before being called.

const printName = function (name) {
  return `Name : ${name}`;
};

console.log(printName("Ayush")); // Name : Ayush

// 3. Constructor Function

// Constructor functions are used to create objects.
// --> Constructor functions are used with the new keyword to create new objects.
// --> this inside the function refers to the new object being created.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const ayush = new Person("Ayush", 19);
console.log(ayush.name); // Output: Ayush
console.log(ayush.age); // Output: 19

// 4. Method in an Object

// --> Methods are functions that are properties of objects.
// --> this refers to the object that owns the method.

const person = {
  name: "Ayush",
  greet: function () {
    return `Hello, ${this.name}!`;
  },
};

console.log(person.greet()); // Output: Hello, Ayush!

// Key Features of Normal Functions

// 1. this Binding

// --> In a normal function, this is dynamically scoped, meaning it refers to the object that called the function (the context).
// --> The value of this can change based on how the function is invoked.

// 2. argument Object

// --> Normal functions have access to the arguments object, an array-like object that contains all the arguments passed to the function.
// --> Useful for functions that need to handle an unknown number of argumennts

function sum() {
    let total = 0;
    for(let num of arguments){
        total += num
    }
    return total
}

console.log(sum(1, 2, 3, 4)) // output : 10

// 3. Hoisting

// --> Function declarations are hoisted to the top of their scope, meaning you can call the function before it is defined in the code.

// 4. Return Value

// --> Functions can return values using the return statement. If no return statement is provided, the function returns undefined.