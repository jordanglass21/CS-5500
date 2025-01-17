# CS 5500 LAB 1

## Setup and Initialization

1. This program uses prompt-sync. To install, run the following command:
    - `npm install prompt-sync`

2. If this is causing an error try:
    - `npm install @types/prompt-sync`

3. To launch the application
    1. Navigate to the directory where the index.ts file is located:
        - `cd /lab1`
    2. Type the following command in the terminal:
        - `npm start`

## Using the program:

Upon startup, the program will prompt you with the following menu:

    1. Add a new todo item
    2. Remove a todo by it's ID
    3. List all todos
    4. Mark a todo as complete
    5. Exit the Application
    What would you like to do?
    Enter a valid number:

Type a number 1-5, and then press 'Enter.' The program will execute the associated command.

## Testing

Upon startup, before displaying the menu, the program will execute the following commands:

- Add a few todos
- List all todos
- Remove a todo
- Mark a todo as completed
- List all todos again to show updates

Check the command line to see how these commands affected the to do list.
Then you can use the program as normal, and view the generated to do list items.

Github username: jordanglass21
https://github.com/jordanglass21/CS-5500/tree/main/lab1