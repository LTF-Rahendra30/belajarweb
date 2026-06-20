
// Perent Class
class Vehicle{
    constructor(model,merk,wheel){
        this.model = model;
        this.merk = merk;
        this.wheel = wheel;
    }
}

// New atribut Inheritance with Super
class Car extends Vehicle{
    constructor(model,wheel,merk, numOfDorss){
        super(merk,model,wheel); // call Constructor Perent
        this.numOfDorss = numOfDorss; // Create Specific new Atribute in the Child Class for the car
    }
}