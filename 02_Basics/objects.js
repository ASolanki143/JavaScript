const a = "foo";
const b = 42;
const c = {};

// Shorthand property names
const o = { a, b, c };

// In other words,
console.log(o.a === {b}.b); // true

// {b} => create a new object with property b ( b = 42 )
// {b}.b => access the property of an object

const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush",
    "full name": "Ayush Solanki",
    [mySym]: "mykey1",
    age: 18,
    location: "Rajkot",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// You cannot add new properties to the object.
// You cannot delete existing properties from the object.
// You cannot change the values of existing properties.
// You cannot reconfigure existing properties.

// shallow freeze : applies only at top level
// If the object contains other objects (nested objects), the nested objects are not frozen and can still be modified.

// Once an object is frozen, you can't unfreeze it or revert it back to a normal object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// create third object with three different way

// 1.
// const obj3 = {obj1 , obj2}
// console.log(obj3) // output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// 2. using assign method
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3) // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1); // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3) // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1) // output : { '1': 'a', '2': 'b' }

// 3. Spread operator
const obj3 = { ...obj1 , ...obj2 }
console.log(obj3) // // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// destructuring the array

const user = {
    username : "Ayush",
    password : "Ayush143",
    email : "ayush@gmail.com"
}

const {email : useremail} = user
console.log(useremail)
