function Person(name,age){
    this.name = name;
    this.age = age;

}

// The method
Person.prototype.eat = function(){
    console.log(`${this.name} is eating`)
}

// Create Object
const person1 = new Person('Bob',12);
const person2 = new Person('Chloe',18);

console.log(person1.name,person1.age);
console.log(person2.name,person2.age);

person1.eat();
person2.eat();
// The output:
// Bob 12
// Chloe 18
// Bob is eating
// Chloe is eating

// ES6 CLASS

class Person2 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // Method
    run(){
        console.log(`${this.name} is running`);
    }
}

// Create object
const person3 = new Person2('Bob',12);
const person4 = new Person2('chloe',18);

console.log(person3.name, person3.age);
console.log(person4.name, person4.age);

person3.run();
person4.run();
// The output:

// Bob 12
// chloe 18
// Bob is running
// chloe is running

console.log(typeof Person2);
// Output:
// function,
// Why is function?? Because class in Javascript is just a SYNTATIC SUGAR, or alternatif for definitons constructor function