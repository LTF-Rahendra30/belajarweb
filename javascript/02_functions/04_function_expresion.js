// Storing functions in variabels

const calculateTax = function (price,tax) {
    const result = price + (price * tax / 100);
    return result;
}

const calculate = calculateTax(1000,20);
console.log(calculate)
// output : 1200

// Use Function in the function

function payement(amount,calculate){
    return amount - calculate;
}

const result = payement(2000,calculateTax(1000,20))
console.log(result)
// Amount : 2000 - 1200 = 800