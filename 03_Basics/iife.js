// IIFE (Immediately Invoked Function Expression)

// function that is executed immediately after it is defined.

// Example :

(function hello() {
  console.log("Hello !!!"); // output : Hello !!!
})();

// using arrow function

(() => {
  console.log("Hello from Arrow func. !!!"); // output : Hello from Arrow func. !!!
})();

// Benefits of IIFE

// 1. Avoid Global Variables
// Variables defined inside an IIFE are not accessible from the global scope.

(function () {
  var counter = 0;
  console.log(counter); // Output: 0
})();

console.log(typeof counter); // Output: undefined

// 2. Create a Private Scope
// IIFEs are often used to create a private scope for variables and functions that should not be accessible outside the IIFE.
// This encapsulation is useful for creating modules or controlling the visibility of code.

var myModule = (function () {
  var privateVar = "I am private";

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

myModule.publicMethod(); // Output: I am private
console.log(typeof myModule.privateVar); // Output: undefined

// 3. Avoid Hoisting Issues
// IIFEs can prevent hoisting issues by ensuring that variables and functions are executed in a controlled scope as soon as they are defined.

// 4. Initialize Variables
// IIFEs are often used to initialize variables with complex logic that should only run once.

var config = (function () {
  var settings = "Default Settings";
  // Complex initialization logic
  return settings;
})();

console.log(config); // Output: Default Settings

