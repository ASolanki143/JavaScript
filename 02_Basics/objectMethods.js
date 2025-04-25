// object methods

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// 1. keys()
console.log(Object.keys(person)); // ['name', 'age', 'city']

// 2. values()
console.log(Object.values(person)); // ['John', 30, 'New York']

// 3. entries()
console.log(Object.entries(person)); // [['name', 'John'], ['age', 30], ['

// 4. assign(target , ...sources)
// Copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target);  // Output: { a: 1, b: 2, c: 3 }

// 5. freeze()
// Freezes an object so that no changes can be made to its properties (you cannot add, delete, or modify properties). The object becomes immutable.
const obj = { name: "John" };
Object.freeze(obj);

obj.name = "Doe";  // This will not change the object
console.log(obj.name);  // Output: "John"

// 6. create(proto , [propertiesObject])
// Creates a new object, using an existing object as the prototype of the newly created object.

const john = Object.create(person);
john.email = "john@gmail.com";
john.age = 40; // This will not affect the original person object
console.log(john) // { email: 'john@gmail.com' }
console.log(john.age) // 40
console.log(person.age) // 30

// 7. getPrototypeOf(obj)
const proto = Object.getPrototypeOf(john);
console.log(proto === person);  // Output: true
console.log(NaN === NaN); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(+0, -0)); // Output: false
console.log(Object.is("foo", "foo")); // Output: true
console.log(NaN == NaN); // Output: false
console.log(Object.getOwnPropertyNames(john)); // Output: ['email', 'age']

// Summary

// Object methods are used to manipulate and interact with objects in JavaScript.

// 1. keys() - Returns an array of a given object's own enumerable property names.
// 2. values() - Returns an array of a given object's own enumerable property values.
// 3. entries() - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// 4. fromEntries() - Creates a new object from an array of key-value pairs.
// 5. assign(target, ...sources) - Copies all enumerable own properties from one or more source objects to a target object.
// 6. freeze() - Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
// 7. create(proto, [propertiesObject]) - Creates a new object with the specified prototype object and properties.
// 8. getPrototypeOf(obj) - Returns the prototype of the specified object.
// 9. is() - Performs a loose equality check on two values.
// 10. getOwnPropertyNames(obj) - Returns an array of all properties (enumerable or not) found directly upon a given object.
// 11. hasOwnProperty(prop) - Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
// 12. seal() - Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.