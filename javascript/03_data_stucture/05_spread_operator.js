// The spread operator is used to spread the values ​​in an object or array.

// =========== OBJECT ============


const obj1 = {name: 'bob'};
const obj2 = { lastName: 'mike', age: 13};
const newObj = {...obj1,...obj2};

console.log(newObj);
// Output: { name: 'bob', lastName: 'mike', age: 13 }

// spread operator combines the two objects

// Copy Object
const originalObj = {name: 'Andrew', age: 8}
const copiedObj = {...originalObj};
console.log(copiedObj);
// Output: { name: 'Andrew', age: 8 }


// =========== ARRAY ============

const array1 = ['bob'];
const array2 = ['Ferrari','Buggati'];
const newArray = [...array1,...array2];
console.log(newArray);
// Output: [ 'bob', 'Ferrari', 'Buggati' ]

const original = ['apple', 'banana', 'cherry'];
const copy = [...original];
console.log(copy); // Output: ['apple', 'banana', 'cherry']