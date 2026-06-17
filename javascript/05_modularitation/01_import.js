// Import Function
import { sayHello } from "../05_modularitation/02_export.js";

sayHello();
// Output: Heloo this is Import

// Import Variabels

import { name,age,married } from "../05_modularitation/02_export.js";
console.log(name);
console.log(age);
console.log(married);

// Output:
// Bob
// 12
// false


// If we want a lot function/method/variabel, we can use *import

import * as variabel from "../05_modularitation/example/01_information.js"

console.log(variabel.name);
console.log(variabel.age);
console.log(variabel.gender);
console.log(variabel.work);
console.log(variabel.salary);
// Output:
// LTF
// 22
// male
// Web3 Fullstack Developer
// 120k -150k $USD / year

