// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("temperature is equals to 40");
} else {
    console.log("temperature is not equals to 40"); // this part is execute
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // gives an error ( power is not defined )


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 750");
}
else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && : only return true if all conditions is true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// || : return true if at least one condition is true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}