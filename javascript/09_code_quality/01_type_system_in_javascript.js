// JavaScript is a dynamically typed language that determines data types at runtime.

// Example

let myNum = 0;
myNum = 1;

console.log(myNum); // 1

myNum = true;
console.log(myNum) // true

// The Problem

function add(numA,numB){
    return numA + numB;
}

console.log(add(1, 1)); // 2
console.log(add(3, 2)); // 5
console.log(add('5', 4)); // ??? ==> 54