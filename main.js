"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1. computer will generate a ramdon number
// 2.ask user for input for guessing number
// 3. compare user input and computer  generated  number and shoe result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10 ",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("You gussed wrong number");
}
