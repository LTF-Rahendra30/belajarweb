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
