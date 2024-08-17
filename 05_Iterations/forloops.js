// basic for loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// print 1 to 5

// in Array

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// break keyword

// --> Exits the loop immediately, skipping any remaining iterations.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Loop stops when i is 3
  }
  console.log(i);
}

// output : 0 1 2

// continue keyword

// --> Skips the current iteration and moves to the next one.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the iteration when i is 2
  }
  console.log(i);
}

// output : 0 1 3 4

// for ... in loop

// --> iterates over the enumerable properties of an object (or the indices of an array).

const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key + ": " + obj[key]);
}

// for ... of loop

// --> used to iterate over iterable objects like arrays, strings, maps, sets, and more. 
// --> It returns the values of the iterable.

for (let value of arr) {
  console.log(value);
}

const str = "hello";

for (let char of str) {
  console.log(char);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// we can not use for .. of loop in object
