import { sayWelcome as userFunction  } from "../05_modularitation/example/02_user.js";

import { sayWelcome as customerFunction } from "../05_modularitation/example/03_customer.js";



userFunction('Bob');
customerFunction('Chloe');
// Output:
// Welcome from user.js! : Bob
// Welcome from cutomer.js! : Chloe






// Import from 02_export.js
import { name,age,married } from "./02_export.js";

console.log(name,age,married);
// Output:
// Bob 12 false
