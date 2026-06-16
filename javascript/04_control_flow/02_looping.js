// ============ FOR ===============

// 1. For Loop

for (let i = 0; i <5;  i++){
    console.log(`Number to ${i} is a ${i}`);
}
// Output: Number to 0 is a 0
// Number to 1 is a 1
// Number to 2 is a 2
// Number to 3 is a 3
// Number to 4 is a 4


// 2. For In, Iteration all data in the Object or Array

const person = {
    name: 'Bob',
    age: 12,
    region: 'Alaska'
}

for (const property in person){
    console.log(`${property} has value ${person[property]}`)
}
// Output: 
// name has value Bob
// age has value 12
// region has value Alaska

// 3. For Of
// More simple than for loop  ad for in

const fruits = ['apple','banana','cerry'];

for (const item of fruits){
    console.log(item);
    // Output: 
    // apple
    // banana
    // cerry
    
}

const users = [
    {
        name: 'Bob',
        age: 12,
        region: 'Alaska',
    },
    {
        name: 'Andrew',
        age: 15,
        region: 'Berlin',
    },
    {
        name: 'Chloe',
        age: 17,
        region: 'Seoul',
    },
    
]

for (const user of users ){
    console.log(user);
    // Output: 
    // { name: 'Bob', age: 12, region: 'Alaska' }
    // { name: 'Andrew', age: 15, region: 'Berlin' }
    // { name: 'Chloe', age: 17, region: 'Seoul' }
}