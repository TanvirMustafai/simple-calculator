import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
    {
        message: "Select one of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "multiplication", "DIVISION"],
    },
]);
// Conditional Statment
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "Please select a valid operator}";
}
