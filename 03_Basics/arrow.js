const user = {
    username: "ayush",
    price: 999,

    welcomeMessageNormal: function() {
        console.log(`${this.username} , welcome to website`);
    },

    welcomeMessageArrow : () => {
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessageNormal() // output : ayush , welcome to website
user.welcomeMessageArrow() // output : undefined , welcome to website

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "ayush"})

// console.log(addTwo(3, 4))

// Key Features of Arrow Functions

// 1. Shorter Syntax

// 2. Lexical this Binding

// --> Arrow functions do not have their own this context; instead, they inherit this from the surrounding (lexical) scope.

// 3. No arguments Object

const sum = (...args) => {
    return args.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3));  // Output: 6


  

