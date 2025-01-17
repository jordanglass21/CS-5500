"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
console.log('Welcome!');
console.log('This program is a Simple Todo App');
while (true) {
    var prompt_1 = (0, prompt_sync_1.default)();
    // display menu
    console.log('1. Add a new todo item');
    console.log("2. Remove a todo by it's id");
    console.log('3. List all todos');
    console.log('4. Mark a todo as complete');
    console.log('5. Exit the Application');
    // prompt user for input
    var action = prompt_1('What would you like to do? (Enter a number)');
    // validate input
    var action_num = 0;
    try {
        action_num = parseInt(action);
    }
    catch (_a) {
        console.log("Please enter a valid number.");
        break;
    }
    switch (action_num) {
        case 1:
            console.log("Performing: ".concat(action));
        case 2:
            console.log("Performing: ".concat(action));
        case 3:
            console.log("Performing: ".concat(action));
        case 4:
            console.log("Performing: ".concat(action));
        case 5:
            console.log("Exiting Application: ".concat(action));
            process.exit(0);
        default:
            console.log("Please enter a valid number.");
    }
}
