// setting a variable for made up temperature called Kelvin.
const Kelvin = 0;

// Setting a Variable to Convert Kelvin To Celcius
const Celsius = Kelvin - 273;

// Setting a Variable to calculate Fahrenheit using Math.Floor to ensure the calulation doesn't include decimals.

const Fahrenheit = Math.floor(Celsius * (9 / 5) + 32);

console.log(`The temperature is ${Fahrenheit} degrees in Fahrenheit `);

// Setting a Variable to calculate the Newton scale temp.
const Newton = Math.floor(Celsius * (33 / 100));

console.log(`The temperature is ${Newton} degrees in Newton `);
