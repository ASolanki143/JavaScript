// Promise :

// A Promise in JavaScript is an object that represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
// It helps manage asynchronous code more efficiently compared to traditional callback functions,
// which often lead to what's known as callback hell.

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// A Promise is created using the Promise constructor, which takes a function (executor) as an argument.
// This function takes two parameters: resolve and reject.
// - resolve: A function to call when the asynchronous operation is successful.
// - reject: A function to call when the asynchronous operation fails.

// Example of a Promise

const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulating success or failure
    
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
})

// Handling the Promise

myPromise
    .then(result => console.log(result)) // This will run if the Promise is resolved
    .catch(error => console.error(error)) // This will run if the Promise is rejected
    .finally(() => console.log("Promise handling complete.")); // This will run regardless of the outcome

// Example of a Promise with setTimeout (simulating an asynchronous operation)

const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Simulating success or failure
        
        if (success) {
            resolve("Asynchronous operation was successful!");
        } else {
            reject("Asynchronous operation failed.");
        }
    }, 2000); // 2 seconds delay
})

// Handling the asynchronous Promise
asyncOperation
    .then(result => console.log(result)) // This will run if the Promise is resolved
    .catch(error => console.error(error)) // This will run if the Promise is rejected
    .finally(() => console.log("Asynchronous operation handling complete.")); // This will run regardless of the outcome


// Handling promises with async/await
async function handleAsyncOperation(){
    try {
        const result = await asyncOperation; // Wait for the Promise to resolve
        console.log(result); // This will run if the Promise is resolved
    } catch (error) {
        console.error(error); // This will run if the Promise is rejected
    } finally {
        console.log("Async operation handling complete."); // This will run regardless of the outcome
    }
}

handleAsyncOperation(); // Call the async function to handle the operation

// Example of Promise.all
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 resolved"), 2000);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 resolved"), 3000);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 4 rejected"), 4000);
});
const promise5 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 5 resolved"), 5000);
});

// Using Promise.all to handle multiple promises
Promise.all([promise1, promise2, promise3, promise4, promise5])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.error("One or more promises rejected:", error);
    })
    .finally(() => {
        console.log("Promise.all handling complete.");
    });

