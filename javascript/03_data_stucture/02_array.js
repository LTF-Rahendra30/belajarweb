// Array in javascript like List in Python
// The main principle is that the data is stored by its index

const array = [1,2];
console.log(typeof array); // Otput : Object

// Create Array with Constructor Object
const users = new Array();
const numbers = new Array(5); // 5 is initial length from array

console.log(users);
console.log(numbers);

// Create Array use Array.from

const char = Array.from('hello');
console.log(char);
// Output: [ 'h', 'e', 'l', 'l', 'o' ]

// This array could copy other array like this:
const user = new Array('Andrew','Bob','Chloe');
const customer = Array.from(user);
console.log(customer);
// Output: [ 'Andrew', 'Bob', 'Chloe' ]
