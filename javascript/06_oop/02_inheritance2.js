
// Perent Class
class Vehicle{
    constructor(model,merk,wheel){
        this.model = model;
        this.merk = merk;
        this.wheel = wheel;
    }
}

// Child Class
// New atribut Inheritance with Super
class Car extends Vehicle{
    constructor(model,wheel,merk, doorCount, fuelType){
        super(merk,model,wheel); // call Constructor Perent

        // Create Specific new Atribute in the Child Class for the car
        this.doorCount = doorCount; 
        this.fuelType = fuelType;

    }
}

// Create object