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

// But, Object freeze must freezed first section form the object, If the object has other properties, that properties can change.

// To make Object to be pure IMMUNTABLE Oject, we will do freezed every properties of the object with RECURSION


function deepFreeze(object){
    Object.keys(object).forEach((name) => {
        const prop = object[name];
        if (typeof prop === 'object' && prop !== null){
            deepFreeze(prop);
        }
    });
    return Object.freeze(object);

}