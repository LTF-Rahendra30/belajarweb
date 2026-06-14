// Storing functions in variabels

const calculateTax = function (price,tax) {
    const result = price + (price * tax / 100);
    return result;
}

const calculate = calculateTax(1000,20);
console.log(calculate)
// output : 1200