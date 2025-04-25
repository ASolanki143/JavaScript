// collection of any data-type
// []
// 0-index

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros); // ['thor', 'Ironman', 'spiderman', "superman", "flash", "batman"]

console.log(Array.isArray("Hitesh"))// return false
console.log(Array.from("Hitesh")) // return [ 'H', 'i', 't', 'e', 's', 'h' ] 
console.log(Array.from({name: "hitesh"})) // interesting return []

let score1 = 100
let score2 = 200
let score3 = [1,2,3]

console.log(Array.of(score1, score2, score3)); // return [ 100, 200, 300 ]