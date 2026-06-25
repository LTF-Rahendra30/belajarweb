import { error } from "node:console";
import { makeCoffe,sendCoffe } from "./mod/03_modul.mjs";

const order = "Americano coffe";

console.log(`I ordered ${order} in the cafe`);

makeCoffe(order)
    .then(
        (value) =>{
            return sendCoffe(value);
        },)
    .then(
        (value) =>{
            console.log(`Barista give me ${value}`);
            console.log(`I got ${value} and finished it`)
        })
        .catch((error) =>{
            console.log(error.message);
        });