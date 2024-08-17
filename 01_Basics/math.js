// Math object methods

// 1. abs()
// Returns the absolute value of a number (i.e., the distance of a number from 0, without regard to its sign).

Math.abs(-5);  // returns 5

// 2. ceil()
// Rounds a number up to the nearest integer.

Math.ceil(4.1);  // returns 5

// 3. floor()
// Rounds a number down to the nearest integer.

Math.floor(4.9);  // returns 4

// 4. round()
// Rounds a number to the nearest integer. If the fractional part is 0.5 or greater, it rounds up.

Math.round(4.5);  // returns 5
Math.round(4.4);  // returns 4

// 5. max()

Math.max(1, 2, 3);  // returns 3

// 6. min()

Math.min(1, 2, 3);  // returns 1

// 7. pow()

Math.pow(2, 3);  // returns 8 (2^3)

// 8. sqrt()

Math.sqrt(16);  // returns 4

// 9. random()
// returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

Math.random();  // might return 0.23456789

// generate number between range

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


