// Tagged Template Literal

// A tagged template is a template literal processed by a function (called a tag).
// The tag function can modify the template string before returning the result.

// Syntax :

// tagFunction`String with ${values}`;
// it gets converted to
// tagFunction(["String with ", ""] , values)

// Parameters of Tag Function

// strings: An array of string parts (split at ${})
// ...values: All interpolated expressions

// The tag function can be a regular function or an arrow function.

// Basic Example

function myTag(strings, ...values) {
    console.log(strings); // ['Hello ', ', you are ', ' years old.']
    console.log(values);  // ['Alice', 25]
    return strings[0] + values[0] + strings[1] + values[1] + strings[2];
}

const result = myTag`Hello ${'Alice'}, you are ${25} years old.`;
console.log(result);
// Output: Hello Alice, you are 25 years old.
