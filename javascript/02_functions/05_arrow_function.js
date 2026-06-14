let calculatePriceDiscount = null

// Declaration with regular function
const calculateDiscountRegulerFunction = function (price,discount) {
    const result = price - (price * discount / 100)
    return result
}
console.log(calculateDiscountRegulerFunction(1000,50))
// Outout: 1000 ==> 500