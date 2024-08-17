let arr = [1 , 2 , 3]

// 1. push
// Adds one or more elements to the end of an array and returns the new length of the array.

arr.push(4);  // arr is now [1, 2, 3, 4]

// 2. pop()
// Removes the last element from an array and returns that element.

arr.pop(); // returns 4, arr is now [1, 2, 3]

// 3. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.

arr.unshift(0); // arr is now [0, 1, 2, 3]

// 4. shift()
// Removes the first element from an array and returns that element. The length of the array is decreased by one.

arr.shift(); // returns 0, arr is now [1, 2, 3]

// 5. concat()
// Merges two or more arrays into one. It does not change the existing arrays but instead returns a new array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);  // newArr is [1, 2, 3, 4]

// 6. slice()
// Returns a shallow copy of a portion of an array into a new array object. You can specify the start and end indices.
// If you omit the end index, it will go to the end of the array.

let arr3 = [1, 2, 3, 4, 5];
let sliceArr = arr3.slice(1, 3); // sliceArr is [2, 3]

// 7. splice()
// Changes the contents of an array by removing, replacing, or adding elements at specific positions.
// It returns the removed elements.

let arr4 = [1, 2, 3, 4];
arr4.splice(1, 2);  // arr4 is now [1, 4], removed elements are [2, 3]

// 8. forEach()
// Calls a function once for each element in an array.

arr.forEach( item => console.log(item));
// Output: 1, 2, 3

// 9. map()
// Creates a new array with the results of applying a provided function on every element in this array.
// It returns a new array.

let newArrMap = arr.map( item => item * 2)
// newArrMap is [2, 4, 6]

// 10. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
// It returns a new array.

let newArrFilter = arr.filter( item => item > 2)
// newArrFilter is [3]

// 11. reduce()
// Applies a function against an accumulator and each element in the array (from left to right) to
// reduce it to a single value.

let sum = arr.reduce((accumulator , currentValue) => accumulator + currentValue , 0)
// sum is 6

// 12. find()
// Returns the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.

let found = arr.find( item => item > 1)
// found is 2

// 13. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function.
// return -1 if element not found

let index = arr.findIndex( item => item > 1)
// index is 1

// 13. indexOf()
// Returns the first index of the element in the array.
// Returns -1 if element not found

let index2 = arr.indexOf(2)
// index2 is 1

// 14. includes()
// Returns true if the array includes the specified value, otherwise false.

let hasTwo = arr.includes(2)
// hasTwo is true

// 15. join()
// Joins all elements of the array into a string.
// It returns a string.

let joined = arr.join('-')
// joined is "1-2-3"

// 16. reverse()
// Reverses the order of the elements in the array.

let rev = arr.reverse()
console.log(arr , " :::: " , rev)
// arr is [3,2,1]

// 17.sort()
// Sorts the elements of an array in place and returns the array.
// The default sort order is according to string Unicode code points.

arr.sort();
// arr is now [1, 2, 3]

let arr5 = [1, 22, 3, 33, 123, 23];
arr5.sort((a, b) => a - b);
// arr5 is now [1, 3, 22, 23, 33, 123]

// 18. some()
// Returns true if at least one element in the array passes the test implemented by the provided function.

let hasLargerNumber = arr.some( item => item > 2)
// hasLargerNumber is true

// 19. every()
// Returns true if all elements in the array pass the test implemented by the provided function.

let allPositive = arr.every( item => item > 0)
// allPositive is true

// 20. flat()
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// If the depth is Infinity, the sub-array elements are concatenated recursively without limitation.

let arr6 = [1, 2, [3, 4], [5, [6, 7]]];
let flatArr = arr6.flat(Infinity);  // flatArr is [1, 2, 3, 4, 5, 6, 7]


