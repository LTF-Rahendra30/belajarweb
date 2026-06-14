let calculatePriceDiscount = null

// Declaration with regular function
const calculateDiscountRegulerFunction = function (price,discount) {
    const result = price - (price * discount / 100)
    return result
}
console.log(calculateDiscountRegulerFunction(1000,50))
// Outout: 1000 ==> 500


// Delclaration with Arrow Function
const calculateDiscountArrowFunction = (price,discount) => {
    const result = price - (price * discount / 100)
    return result
}

console.log(calculateDiscountArrowFunction(1000,20))
// Outout: 1000 ==> 800

// REFACTOR

// simplify the writing of arrow function bodies so that they dont use curly brackets at all.

let calculateTax;

// Arrow Function
const calculatePriceAfterTax = (price1,tax) => {
    const result1 = price1 + (price1 * tax / 100);
    return result1;
}

calculateTax = calculatePriceAfterTax(1000,50);
console.log(calculateTax);
// Output: 1500


// Simplify Arrow Function
const calculatePriceAfterTaxSimplify = (price1,tax) => price1 + (price1 * tax / 100);
calculateTax = calculatePriceAfterTaxSimplify(1000,10);
console.log(calculateTax);
// Output: 1100