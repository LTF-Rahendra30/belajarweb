// Simulation with setTimeout()

const estimationTime = 3000; // 3 Second

// setTimeout(() =>{
//     console.log('Hello World');
// },estimationTime);

// Hello world will printed on terminal after 3 second 


// Import
import { makeCoffe } from "./mod/01_modul.js";

console.log("I ordered coffe at the cafe")
makeCoffe();
console.log("All Done!!")
console.log("I got the coffe and finished it")
// Output:
// I ordered coffe at the cafe
// Plase wait, The barista is making your coffeein 5 second
// All Done!!
// I got the coffe and finished it
// The barista has finished making coffee.

// This is logic error, how can you finish your coffe when your coffe order hasnt arrived yet and is being made by the barista?