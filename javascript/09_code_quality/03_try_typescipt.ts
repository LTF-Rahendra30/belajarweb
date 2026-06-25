const myName: string = "TypeScipt";

function greet(name: string){
    console.log(`Hello ${name}. My name is ${myName}`);
}

const age: number = 12;

greet("JavaScript")
// Output:
// Hello JavaScript. My name is TypeScipt


function adding(numA: number, numB: number): number {
    return numA + numB;
}

const result = adding(10,10);
console.log(result) // 20

// Try add string and number
const result2 = adding('10',10);
console.log(result2) // 1010