import { sayWelcome as userFunction  } from "../05_modularitation/example/02_user.js";

import { sayWelcome as customerFunction } from "../05_modularitation/example/03_customer.js";


userFunction('Bob');
customerFunction('Chloe');
// Output:
// Welcome from user.js! : Bob
// Welcome from cutomer.js! : Chloe