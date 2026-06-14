// Object in javascript like Dictionary in Python, Primary principle is 
// Key and value {key : value}

// Create Simple Object

const user = {
    name: 'Bob',
    'last name': 'Marley',
    age: 9,
};

const products = {
    name1: 'Backpack', 
    price: 10000,
    color : 'Black',

};
console.log(user)
console.log(products)

// Accesed Object Properties

// Using Dot
console.log(user.name) // Output: Bob

// Using square bracket
console.log(user['age']) // Output: 9

// Using object destructuring
const {name1, price} = products;
console.log(name1,price ) 
// Output: Backpack 10000

// Solving if key dont have value (undefined)
const {name2, price2, soldOut = false} = products;
console.log(soldOut); 

// CHANGE VALUE IN THE OBJECT PROPERTIES

const account = {
    balance: 10000,
    debt: 10,
    name: "Chloe"
};

account.balance = 20000;
console.log(account.balance)

// Delete properties in the object

const wallet = {
    name: 'Bob',
    age: 12,
    married: false,
};

delete wallet.married;
console.log(wallet) // Output: { name: 'Bob', age: 12 }
delete wallet['age'] 
console.log(wallet) // Output: { name: 'Bob'}