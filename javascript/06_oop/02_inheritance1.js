

// Perents Class WITH ES6 CLASS

class PerentClass{

}

class ChildClass extends PerentClass{

}

// EXAMPLE SMARTPHONE (Perent)

class Smarthpone {
    constructor(color,brand,model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`);
    }
}

// Inheritance
class iOS extends Smarthpone{
    airDrop(){
        console.log("iOs have a behavior AirDrop");
    }
}

class Android extends Smarthpone{
    splitScreen(){
        console.log("Android have a behavior Split Screen");

    }
}

// Create Object
const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop

android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen


// =============== CLASS WITHOUT USE ES6 CLASS ==============

function SmartPhone(color,brand,model){
    this.color = color;
    this.brand = brand;
    this.model = model;
}