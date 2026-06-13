let age = 14;

// Unary Operator
typeof age;

// Binary operator
5 + 4;
10 / 2;
age = 30;

// Ternary operator (conditional operator)
(age < 18)? "Youre to young" : "welcome";

// Comparison Operator (==, <,>,<=,>=)
const a = 10
const b = 10
const c = 20
console.log(a == b) // output: true
console.log(a > c) // output: flase
console.log(a < c) // output: ture


// Logical Operator, 1. AND (&&) 2. OR (||), 3. NOT (!)

// AND. will be fulfilled if all  conditions are true
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true

// OR. will be fulfilled if one of the condistions is tue
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true

// NOT
console.log(!true); // false
console.log(!false); // true