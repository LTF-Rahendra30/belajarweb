// Change to string with explicit Controversion

const number = 123
const boolean = true
// Before Change
console.log(typeof number); 
console.log(typeof boolean); 
// Output: 
// number
// boolean
const strNumber = String(number)
const strBoolean = boolean.toString()

// After
console.log(typeof strNumber);
console.log(typeof strBoolean); 
// Output: 
// string
// string