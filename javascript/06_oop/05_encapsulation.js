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

