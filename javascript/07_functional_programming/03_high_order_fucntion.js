// HOF is a function that accepts another function as an argument and/or returns another function.

// Example HOF

function apply(opertion,...agrs){
    return opertion(...agrs)
}

function sum(a,b,c){
    return a+b+c;
}

function discount(disc,value){
    return value - ((disc / 100)  * value);

}

const productPrice = apply(sum,100,100,200);
const withDiscount = apply(discount,25,productPrice);

console.log('Product price:', productPrice); // Output: Product price: 400
console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300

// ===== CURRYING WITH HOF =======


function adjectivfy(adjective){
    return function (noun){
        return `${noun} ${adjective}`;
    }
}

function multipleBy(x){
    return function(y){
        return x * y;
    }
}

const coolifier = adjectivfy("you're so cool");
const funnifier = adjectivfy("So Funny");
const multipleByFive = multipleBy(5);

console.log(coolifier('Chloe')); // Output: Chloe you're so cool.
console.log(funnifier('JavaScript')); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50

// ===== HOF: Array.map() ======

const numbers  = [1,2,3,4];
const doubled = numbers.map((num) => num *2);
console.log(doubled); // [2, 4, 6, 8]