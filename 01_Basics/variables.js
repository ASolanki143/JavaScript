//we declare a variable in 4 ways

const name = "Ayush";
let age = 19;
var email = "ayush@gmail.com";
semester = 5;

//print output in console
console.log(name , age , email , semester)

//print output in console in table formate
console.table([name , age , email , semester])

//scope

//const => block scope / function scope
//let => block scope / function scope
//var => globle scope

//var : prefer not to use because of scope issues

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1st loop with `let`
for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
}

// 2nd loop with `var`
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
}

// let is block scoped, so each iteration of the loop has its own copy of i.
// So after 1000ms, the values of b[i] will be correct.

// var is function scoped, not block scoped. So all setTimeout callbacks share the same i, and after the loop finishes, i is 10.
// So, after 1000ms, each console.log(b[i]) will effectively be:
// console.log(b[10]), which is undefined since b only has indices from 0 to 9.

// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
