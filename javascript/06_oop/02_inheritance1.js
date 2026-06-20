

// Perents Class 

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
