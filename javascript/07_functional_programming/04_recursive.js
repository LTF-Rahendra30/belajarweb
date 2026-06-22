// a function calls itself

// Example
function generateArray(n){
    const result = [];
    for (let counter =0; counter <=n; counter+=1){
        result.push(counter);
    }
    return result;
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

// But in Functional Programming, we cant change the data, so we cant change the value of the counter variabel, to solved this problem, do that:

function generateArray2(n){
    if(n<0){
        return [];
    }
    return [...generateArray2(n-1),n]
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]