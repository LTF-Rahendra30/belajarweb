
// String
const text = "Helooo Everyoneeee This is Stringggg"
console.log(text)

// Num
const year = 2026
const weight = 63.5

// IINFINITY
const result = 20 /0 // This is special, Infinity, when we did aritmetic operation undefined, like dividing a velue by zero
console.log(result)

// NaN (Not A Number)
const result2 = Number('Bob Marley') // Try change string to number, and then the result is "NaN" because we try String that isnt Number to change Number 
console.log(result2)


// Boolean
const rich = false
const born = true
console.log(rich,born)
// output: false true

// Boolean with operator
const isGreater= 9 > 7;
console.log(isGreater) 
// Output: True


// Null
let massage = null
console.log(massage)
// This is a variable with an empty value, to dedicate the absence of a value that does not exsist

let stranger = undefined
console.log(stranger)
// This is data type to undined value

// Try  different between null and undefined with JSON
const name1 = {first: 'Bob', last: null}
const name2 = {first: 'Dory', last: undefined}

console.log(JSON.stringify(name1))
console.log(JSON.stringify(name2))

// The output:
// {"first":"Bob","last":null}
// {"first":"Dory"}
