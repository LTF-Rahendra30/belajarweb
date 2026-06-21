// Encapsulation is the process of wrapping and hiding data in one container (CLASS)

// This Atribut class can Change in outside
class CoffeMachine{
    constructor(waterAmount){
        this.waterAmount = waterAmount
        this.temperature = 90;
    }
    makeCoffe(){
        console.log(`Make a coffe at temperature ${this.temperature}`);
    }
}

const coffe = new CoffeMachine(100);
coffe.temperature = 20;

coffe.makeCoffe();
// Output:
// Make a coffe at temperature 20
// See that

console.log("-".repeat(40));
// Get and Set method

class CoffeMachine2{
    constructor(waterAmount){
        this.waterAmount  = waterAmount;
        this._temperature = 90;
    }

    // Set method
    set temperature(temperature){
        console.log("you're not all allowed to change the temperature");
    }
    // Get method
    get temperature(){
        return this._temperature;
    }
}

const coffe2 = new CoffeMachine2(10);
console.log("Berofe change: ",coffe2.temperature);
coffe2.temperature = 1000;
console.log("Adfter change: ",coffe2.temperature)
// Output:
// Berofe change:  90
// you're not all allowed to change the temperature
// Adfter change:  90