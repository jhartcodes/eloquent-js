// Variable for my Age
let myAge = 33;

// Variable to calculate the first two years that will be 10.5 years.

const earlyYears = Math.floor(2 * 10.5);

// Variable to calculate the years after the first tow years that will be ewaul to 4
let laterYears = myAge - 2;

// Calculate the later Years that don't include the first 2 years.
laterYears = laterYears * 4;

console.log(earlyYears, laterYears, "EARLY AND LATER YEARS");

const myAgeInDogYears = earlyYears + laterYears;

// My name using the lowercase method to return the name all lowercase
const myName = "Joel".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
