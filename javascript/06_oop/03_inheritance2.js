
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

    // New method for CAR

    showSpecs(){
        return `${this.merk} ${this.model} have: ${this.wheel} wheel, fuel type: ${this.fuelType}`
    }
}

// Create object
const car1 = new Car('Mcleren 765LT',4,'McLeren',2,'Gas')

console.log(car1.model);
console.log(car1.wheel);
console.log(car1.merk);
// Output:
// McLeren
// 4
// Mcleren 765LT
console.log(car1.showSpecs());
// Output:
// Mcleren 765LT McLeren have: 4 wheel, fuel type: Gas
