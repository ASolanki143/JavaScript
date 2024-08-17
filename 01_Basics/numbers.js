// Number()

const num1 = 1000;
const num2 = new Number(2000);

console.log(typeof num1) // number
console.log(typeof num2) // object

// methods

// 1. isNaN()

Number.isNaN(NaN);      // returns true
Number.isNaN("NaN");    // returns false
Number.isNaN(123);      // returns false

// 2. isFinite()

Number.isFinite(10);        // returns true
Number.isFinite(Infinity);  // returns false
Number.isFinite("10");      // returns false

// 3. isInteger()

Number.isInteger(5);    // returns true
Number.isInteger(5.1);  // returns false
Number.isInteger("5");  // returns false

// 4. parseFloat()
// Converts a string to a floating-point number.

Number.parseFloat("12.34"); // returns 12.34
Number.parseFloat("12px");  // returns 12

// 5. parseInt()
// Converts a string to an integer. It can also take a second argument to specify the radix (base) of the number.

Number.parseInt("123");     // returns 123
Number.parseInt("123px");   // returns 123
Number.parseInt("11", 2);   // returns 3 (binary 11 is 3 in decimal)

// 6. toFixed()
// Formats a number using fixed-point notation, returning a string representation of the number with a specified number of digits after the decimal point.

let num = 12.34567;
num.toFixed(2); // returns "12.35"

// 7. toPrecision()
// Formats a number to a specified length, returning a string representation of the number.

num = 123.456;
num.toPrecision(5); // returns "123.46"

// 8. toString()
// Converts a number to a string, optionally specifying the base (radix) for conversion.

num = 255;
num.toString();    // returns "255"
num.toString(16);  // returns "ff" (hexadecimal representation)

// 9. isSafeInteger()
// Determines whether the provided value is a safe integer (within the range of -(2^53 - 1) to 2^53 - 1).

Number.isSafeInteger(10);       // returns true
Number.isSafeInteger(Math.pow(2, 53)); // returns false
