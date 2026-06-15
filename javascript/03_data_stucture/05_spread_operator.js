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

