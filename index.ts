#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random()* 10 + 1);

const answer = await inquirer.prompt([
  {
    message: "Please guess a number Between 1-10:",
    type: "number",
    name: "userinput",
  },
]);

if (answer.userinput === randomnumber) {
  console.log("Congratulation! you guessed correct number");
} else {
  console.log("Sorry! You guessed wrong number");
}
