// Create a EightBall Project with Switch Statements and If Else;

const userName = "Joel";

userName ? console.log(`Hello ${userName}`) : console.log("Hello!");

const userQuestion = "Am I Getting Old";

console.log(userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = "";
let eightBall2 = "";

// Switch Statements.
switch (randomNumber) {
  case 0:
    eightBall = "It is difficult  to say";
    break;
  case 2:
    eightBall = "It is certain";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  default:
}

// Another Aproach to the solution.
if (randomNumber === 1) {
  eightBall2 = "It is difficult  to say";
}
if (randomNumber === 2) {
  eightBall2 = "It is certain";
}
if (randomNumber === 3) {
  eightBall2 = "Ya in you're dreams!";
} else {
}

console.log(eightBall2, "should see different cases for eightball 2");
