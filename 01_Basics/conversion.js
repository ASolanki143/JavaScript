//any type to number

console.log(":::::: Number ::::::")

console.log(Number("33")) // 33
console.log(Number("33abc")) // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)) // 0

//any type to boolean

console.log(":::::: Boolean ::::::")

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean("Ayush")) // true
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

//other conversions

console.log(":::::: Other Conversion ::::::")

console.log("1" + 2) // "12"
console.log("1" - 2) // -1
console.log(1 + "2") // "12"
console.log(1 - "2") // -1
console.log(1 + 1 + "2") // "22"
console.log("1" + 1 + 2) // "112"
console.log(+true) // 1
console.log(+false) // 0

console.log(":::::: Conversion with null and undefined ::::::")

console.log(1 + null) // 1
console.log(1 + undefined) // NaN
console.log(1 + null + "2") // "12"
console.log(1 + null - "2") // -1