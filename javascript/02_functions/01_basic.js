function sayHello(name) {
    result = console.log(`Hello ${name}`)
}
sayHello("Bob")

// Example conversion Celcius to Fahrenheit
// rules 9 / 5 * (The temperature in celcius) + 32

function conversionCelciusToFahrenheit(temperature){
    const temperatureInFahrenheit = 9 / 5 * temperature + 32

    return temperatureInFahrenheit;
}

// Uses Function
console.log(conversionCelciusToFahrenheit(90))
