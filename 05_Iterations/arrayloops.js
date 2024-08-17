// forEach

// --> three argument : current element , index and array

let arr = [1, 2, 3, 4, 5];

function printMe(item){
    console.log(item)
}

arr.forEach(printMe);
arr.forEach((item , index , arr) => console.log(item , index , arr))

// map

// --> three argument : current element , index and array
let newArr = arr.map((item) => item ** 2);
console.log(newArr);

newArr = arr.map((item, index, arr) => {
  console.log(item, " ::: ", index, " ::: ", arr);
  return item ** 2;
});

// filter

let evenNum = arr.filter((item) => item % 2 == 0);
console.log(evenNum);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

// reduce

let sum = arr.reduce((accu, item) => accu + item, 0);
console.log(sum);
let mul = arr.reduce((accu, item) => accu * item, 1);
console.log(mul);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);

// combination of methods

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
