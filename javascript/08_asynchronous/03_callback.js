import { makeCoffe } from "./mod/01_modul.js";

console.log("I ordered coffe at the cafe")
makeCoffe(() => {
    console.log("All Done!!")
    console.log("I got the coffe and finished it")
});

// Output:
// I ordered coffe at the cafe
// Plase wait, The barista is making your coffee in 5 second -----> Directly exceution


// The barista has finished making coffee.
// All Done!!
// I got the coffe and finished it -----> Execution after 5 second
