// PROBLEM: I would like you to wrtie a program that will register runners for a race and give them instructions for the race.
// Each runner receives a race number.
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).

// Object Solution with mock data Registrants.

const registrants = [
  {
    name: "John Smith",
    age: 16,
    registeredEarly: false,
  },
  {
    name: "Jane Doe",
    age: 19,
    registeredEarly: true,
  },
  {
    name: "Bob Johnson",
    age: 22,
    registeredEarly: false,
  },
  {
    name: "Alice Williams",
    age: 26,
    registeredEarly: true,
  },
];

for (let i = 0; i < registrants.length; i++) {
  const participant = registrants[i];
  let raceNumber = 999;
  let runTime = "12:30 pm";

  if (participant.age >= 18) {
    if (participant.registeredEarly) {
      raceNumber = 1001;
      runTime = "9:30 am";
    } else {
      raceNumber = 1000;
      runTime = "11:00 am";
    }
  }

  console.log(
    `${participant.name}, your race number is ${raceNumber} and your race time is ${runTime}.`
  );
}
