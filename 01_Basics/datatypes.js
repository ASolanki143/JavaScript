// two type of data type :

// 1. Primitive
// -- call by value
// -- stored in stack memory
// number , string , boolean , BigInt , null , undefined , Symbol

let num = 5
let username = "Ayush"
let isLoggedIn = false
let email = null
let password;
let mySymbol = Symbol("key1")

console.table([num , username , isLoggedIn , email , password , mySymbol])

// we can check datatype using typeof
// typeof null ===> object but null is not non-primitive datatype

console.log(typeof num)

// 2. Non-primitive
// -- call by reference
// -- stored in heap memory
// -- Array => []
// -- Object => {}
// -- function => function()

const myArr = [1 , 2 , 3 , 4 , 5]
const myObj = {
    username : "Ayush",
    password : "Ayush123"
};
const myFun = function(){
    console.log("Hello from function");
}

//typeof array and object ===> object
//typeof function ===> function