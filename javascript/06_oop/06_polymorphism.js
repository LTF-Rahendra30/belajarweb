// ========== OVERRIDING ==========

// 1. Overring Constructor

// Perent Class. Add new attributes to a child class based on attributes inherited from the parent class.

class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }
 
  charging() {
    console.log(`Charging ${this.model}`);
  }
}

// Child Class
class Android extends SmartPhones{
    // overriding constructor
    constructor(color,brand,model,device){
        super(color,brand,model);
        this.device = device;
    }

    splitScreen() {
    console.log('Android have a Split Screen');
  }
}

// Create object
const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');
console.log(android);
// Output:
// Android {
//   color: 'white',
//   brand: 'B',
//   model: 'Galaxy S21',
//   device: 'smart TV'
// }

// 2. Overriding Method. changing the implementation of a method inherited from a parent class in a child class

// I wanna change the charging() method inherited from a perent class 

// 
class iOS extends SmartPhones{
    constructor(color,brand,model,device){
        super(color,brand,model);
        this.device = device;
    }

    
  charging() {
    console.log(`Charging ${this.model} with fast charger`);
  }

  airDrp() {
    console.log('iOS have a AirDrop');
  }
}
