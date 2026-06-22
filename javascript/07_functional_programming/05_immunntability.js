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