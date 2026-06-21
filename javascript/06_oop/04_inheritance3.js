
// =============== PERENT CLASS WITHOUT ES6 ============
function SmartPhones(color, brand, model) {
  this.color = color;
  this.brand = brand;
  this.model = model;
}

SmartPhones.prototype.charging = function() {
  console.log(`Charging ${this.model}`);
};

// Create Child Class

function iOS(color, brand, model) {
  SmartPhones.call(this, color, brand, model);
}

iOS.prototype = Object.create(SmartPhones.prototype);
iOS.prototype.constructor = iOS;

// Create Method
iOS.prototype.airDrop = function() {
  console.log('iOS have a behavior AirDrop');
};


// Create Child Class

function Android(color,brand,model){
    SmartPhones(this,color,brand,model);
}

Android.prototype = Object.create(SmartPhones.prototype);
Android.prototype.constructor = Android;

// Method
Android.prototype.splitScreen = function(){
    console.log('Android have a Split Screen');
}

