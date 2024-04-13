#! /usr/bin/env node

// Creating a Cli To Do List

import inquirer from "inquirer";

let toDo = []

let condition = true

while (condition) {

let input = await inquirer.prompt
(
    [
        {
            name : "task",
            message : "To Do List",
            type : "input"
        },

        {
            name : "tasks",
            message : "Do you want to Add More?",
            type : "confirm",
        }
    ]
);
        toDo.push(input.task)

        condition = input.tasks
        
    }
    
        console.log(toDo)