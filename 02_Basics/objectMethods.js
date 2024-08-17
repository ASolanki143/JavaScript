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
console.log(john) // { email: 'john@gmail.com' }
console.log(john.age) // 30

// 7. getPrototypeOf(obj)
const proto = Object.getPrototypeOf(john);
console.log(proto === person);  // Output: true
