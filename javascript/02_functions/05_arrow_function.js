let calculatePriceDiscount = null

// Declaration with regular function
const calculateDiscountRegulerFunction = function (price,discount) {
    const result = price - (price * discount / 100)
    return result
}