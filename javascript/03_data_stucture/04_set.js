// Set dont have key and index, The data stored in the set will have unique values, meaning there will be no duplicte data

// ======== CREATE SET ==========

const mySet = new Set([1,2,3,4]);
console.log(mySet)
// Output: Set(4) { 1, 2, 3, 4 }


// ======== STORED VALUE IN SET ==========

const set = new Set();
set.add(1);
set.add('bob');
set.add(2);
set.add('Andew');
console.log(set)

// Output: Set(4) { 1, 'bob', 2, 'Andew' }

// ======= ACCESSING ========

for (const name of set){
    console.log(name);
    // Output: 
    // 1
    // bob
    // 2
    // Andew
}

// =========== DELETE VALUE IN SET ==============   

const theSet = new Set();
theSet.add('Andrew')
theSet.add('Bob')
theSet.add('Kevin')

// Before Delete
console.log(theSet)
// Output: Set(3) { 'Andrew', 'Bob', 'Kevin' }


// After Delete
theSet.delete('Kevin')
console.log(theSet)
// Output: Set(2) { 'Andrew', 'Bob' }