// Shallow Copy - Key Points

// ✅ Copies only the top-level properties of an object or array.
// ❌ Nested objects or arrays are not copied—they are referenced.
// 🔁 Changes made to nested properties in the copy will affect the original.
// ✅ Faster and uses less memory than deep copy.
// 🛠️ Common methods:
//     For objects: { ...object }, Object.assign({}, object)
//     For arrays: [...array], array.slice()
// ⚠️ Not safe when working with nested or complex structures.

// Example of Shallow Copy
let original = {
    name: "Alice",
    address: { city: "New York" }
};

const copy = { ...original }; // shallow copy

copy.name = "Bob";
copy.address.city = "Los Angeles";

console.log(original.name);       // "Alice" ✅
console.log(original.address.city); // "Los Angeles" ❌

// Shallow Copy Methods

// Objects
const shallow = { ...obj };
const shallow2 = Object.assign({}, obj);

// Arrays
const arrCopy = [...arr];
const arrCopy2 = arr.slice();

// Deep Copy - Key Points

// Copies all levels of an object or array, including nested objects.
// 🧠 Each value is recursively cloned, creating a completely independent copy.
// 🔐 Changes in the copy do not affect the original object.
// 🐢 Slower and uses more memory (because it copies everything).
// 🛠️ Common methods:
//     Simple method: JSON.parse(JSON.stringify(object)) (limited)
//     Advanced method: _.cloneDeep(object) using Lodash
// ✅ Recommended for deeply nested or complex data structures.

// Example of Deep Copy

original = {
    name: "Alice",
    address: { city: "New York" }
};

const copy = JSON.parse(JSON.stringify(original)); // deep copy

copy.name = "Bob";
copy.address.city = "Los Angeles";

console.log(original.name);       // "Alice" ✅
console.log(original.address.city); // "New York" ✅

// Deep Copy Methods

// Objects
const deep = JSON.parse(JSON.stringify(obj));

// Arrays
const cloneDeep = require('lodash.clonedeep');
const deepCopy = cloneDeep(obj);
