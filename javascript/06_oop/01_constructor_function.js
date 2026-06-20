function Person(name,age){
    this.name = name;
    this.name = age;

}

Person.prototype.eat = function(){
    console.log(`${this.name} is eating`)
}