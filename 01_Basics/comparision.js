// comparision with null

// null is only loosely equals to undefined , null is not convert to 0
// but in relational operators null is converted to zero

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
console.log(null == undefined) // true
console.log(null != 0) // true

// loose equality
// -- check only value

console.log(2 == "2") // true
console.log(3 == [3 , 2 , 1]) // false
// --> 3 == [3, 2, 1] returns false because the array [3, 2, 1] is converted to "3,2,1", which cannot be converted to a number, resulting in NaN.

console.log(1 == [1]) // true
// --> 1 == [1] returns true because the array [1] is converted to "1", which is then converted to the number 1, making the comparison 1 == 1.

console.log(0 == false) // true
console.log(0 == null) // false
console.log(0 == undefined) // false

// strictly equality
// -- check value and datatype both

console.log(2 === "2") // false
console.log(null === undefined) // false