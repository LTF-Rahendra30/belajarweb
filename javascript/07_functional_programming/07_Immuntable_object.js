// Object Freeze, To freeze the object after created, so the object cant change after created

const user ={
    name: 'Bob',
    email: 'Bob12@gmail.com',
};

// Freeze Object
Object.freeze(user);

// Before try change
console.log(user);
// { name: 'Bob', email: 'Bob12@gmail.com' }


// Try change object after freezed
user.email = 'Bob32@gmail.com';
console.log(user);
// { name: 'Bob', email: 'Bob12@gmail.com' }
// This is Immuntable