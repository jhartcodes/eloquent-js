/*There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus 
(the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 
Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.*/

//ForEach Method

var PeopleOnTheBus = function (busStops) {
  let peopleonBus = 0;
  busStops.forEach((stop) => {
    (peopleonBus += stop[0]), (peopleonBus -= stop[1]);
  });

  return peopleonBus;
};

console.log(
  PeopleOnTheBus([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
// output should be 5.

//For Loop

var number = function (busStops) {
  let peopleonBus = 0;
  for (let stop of busStops) {
    peopleonBus += stop[0];
    peopleonBus -= stop[1];
  }

  return peopleonBus;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

const number = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);

/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line. */

// SOLUTION
function sum(numbers) {
  let total = 0;
  numbers.forEach((num) => {
    if (num === undefined) {
      total = 0;
    } else return (total += num);
  });
  return total;
}

// simple for loop

sum = function (numbers) {
  "use strict";
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

//Reduce Function

/* The reduce() method is a powerful array method that can be used to iterate over an array and perform a calculation on each element, while accumulating the result in a single value. It takes two arguments:

a callback function that will be called on each element of the array,
an initial value that will be used as the starting point for the calculation.
The callback function takes two arguments:

an accumulator, which keeps track of the accumulated value and its updated on each iteration,
the current value, which is the element of the array that is currently being processed. */

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
