function print(paramA){
    console.log(paramA);  // pramA is a Parameter
}

// Uses Function
print("Hello World") 
// Ouput : Hello World
// yeah this is functions like print function in Python

// Example function discount price 

function calculateDiscount(price,discount){
    return price - (discount * price / 100)
}

// Create Argument
// Argument are data entered into function paremeters, which can be variabels or direct values

// Direct
console.log(calculateDiscount(1000,10)) 
// Output: 900

// Entered value by variabel
const price = 1000; // 1000 is aargument
const discount = 50; // 50 is argument
console.log(calculateDiscount(price,discount)) 
// Output:
// 500