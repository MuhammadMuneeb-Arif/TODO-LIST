#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What would you like to add in your todo?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more ?",
            default: "false"
        }
    ]);
    todos.push(addTask);
    condition = addTask.addMore;
    console.log(todos);
}
