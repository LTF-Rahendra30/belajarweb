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
console.log(typeof strNumber)
console.log(typeof strBoolean) 
// Output: 
// string
// string


// Change to Number with explicit Controversion

// Before Change string to number
const strNumber1 = "123"
const strFloat = "3.14"
const boolean1 = true
console.log(typeof strNumber1) 
console.log(typeof strFloat) 
console.log(typeof boolean1) 


// After Change string to number
const numFromString = Number(strNumber1)
const floatFromString = Number(strFloat)
const numFromBoolean = Number(boolean1)
console.log(typeof numFromString) 
console.log(typeof floatFromString) 
console.log(typeof numFromBoolean) 

// ParseInt() and parseFloat()

const cm = "20cm"
const px = "64px"

const intFromCM = parseInt(cm)
const intFromPX = parseFloat(px)
console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64


// Change to Boolean

const a = 123
const b = "Helo"
const c = null

const boolFromNumber = Boolean(a)
const boolFromString = Boolean(b)
const boolFromNull = Boolean(c)

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

// Conversion Implisit

const name2 = "bob"
const age2 = "My name " + name2 + " age: " + 13
console.log(age2)