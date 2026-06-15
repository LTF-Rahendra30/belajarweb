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


// USE LITERAL ARRAY

const array2 = [];
const fruits = ['apple','banana','cerry'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// ACCESSING ARRAY ELEMENTS

// With Index, start from 0

const myArray = [10,20,30,40];
console.log(myArray[0]); // Output: 10

// MANIPULATION ARRAY VALUE

// Use Indexing

let theNumber = [10,20,30,40];
// let me change  the array value at index 2 
theNumber[2] = 50;
// 30 ==> 50
console.log(theNumber); // Output: [ 10, 20, 50, 40 ]

// Use Push, the methode that add value to the array at the last index or element
let myNumber = [10,20,30,40];
myNumber.push(50);
console.log(myNumber)
// Output: [ 10, 20, 30, 40, 50 ]

// Delete element and Array Data

let myCat = ['Tom','Herry','Mike','Kevin'];
delete myCat[1]; // With index, delete 'Herry'
console.log(myCat);
// Output: [ 'Tom', <1 empty item>, 'Mike', 'Kevin' ]

// Clear delelted with splice()
myCat.splice(1,1);
console.log(myCat);
// Output: [ 'Tom', 'Mike', 'Kevin' ]
