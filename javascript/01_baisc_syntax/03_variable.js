const id = 229;
let username = "Bob";

console.log(id)
console.log(username)

// Try change let variable type

console.log("Let Variable: ");
let name = "Adam";
console.log("Before change: ",name);
name = "Bob";
console.log("After change: ",name);


// Try change const variable type
console.log("Const Variable: ");

const married = false;
console.log("Before change: ",married);
married = true; // This is error, const cant change
console.log("After change: ",married);
