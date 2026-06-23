// Immuntability Array Method

// 1. Array Map

const oldArray = ['Andrew','Bob','Chloe']
const newArray = oldArray.map((name) => `${name} New`);

console.log(oldArray); // [ 'Andrew', 'Bob', 'Chloe' ]
console.log(newArray); // [ 'Andrew New', 'Bob New', 'Chloe New' ]

// 2. Array Filter

const turthyArray = [1, '', 'Halo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(turthyArray); //[ 1, 'Halo', 'Harry', 14 ]