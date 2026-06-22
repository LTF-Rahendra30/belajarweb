// Use of the Object.assign function which can change the value of a previously created object.

function registerEmail(person,email){
    return Object.assign(person,{email});
}

const person = {
    name: 'bob',
    username: 'Boby',
};

const personWithEmail = registerEmail(person, 'bob@gmail.com');

console.log(person); //{ name: 'bob', username: 'Boby', email: 'bob@gmail.com' }
console.log(personWithEmail); //{ name: 'bob', username: 'Boby', email: 'bob@gmail.com' }

// ====== THE SOLUTION ABOUT THIS PROBLEM TO BE MAKE THE FUNCTION TO  PURE WITH SPREAD OPERATOR ========

function registerEmail2(person,email){
    // Use spread operator for duplicate person value
    return{...person,email};
}

const person2 = {
    name: 'Chloe-un',
    username: 'chloe',
};

const personWithEmail2 = registerEmail2(person2,'chloe@mail.com')


console.log(person2);
// { name: 'Chloe-un', username: 'chloe' }


console.log(personWithEmail2);
// { name: 'Chloe-un', username: 'chloe', email: 'chloe@mail.com' }