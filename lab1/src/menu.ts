import promptSync from 'prompt-sync';
import { ToDoManager } from './ToDoManager';

/**
 * This class is a menu for the ToDoManager Class. That is, it acts as a controller and controlls the
 * flow of this program which simulates a To Do List Manager.
 **/
export class Menu {

    private tdm: ToDoManager; // tdm = to do manager
    private prompt;

    /**
     * This is a constructor used to instantiate the menu class. It initilizes the ToDoManager and 
     * then calls a function to initialize data for testing purposes.
     * 
     * @param tdm The ToDoManager the menu uses
     */
    constructor(tdm: ToDoManager) {
        this.tdm = tdm;
        this.prompt = promptSync();
        this.initializeList(); // initializes data for testing purposes
    }

    /**
     * Initializes data for testing purposes.
     */
    initializeList() {

        console.log("Initializing data for testing...\n");
        
        // add a few todos
        this.tdm.addToDo("Clean Room", "Clean my bedroom and fold all the laundry. Don't forget to make the bed.")
        this.tdm.addToDo("Study", "Study for CS 5500 exam. Topics include TypeScript and Software Process Models.")
        this.tdm.addToDo("Meal Prep", "Place chicken in pan with oil and spices. Heat to 350 degrees.")

        // list all todos
        this.tdm.listToDo();

        // remove a todo
        this.tdm.removeToDo(1);

        // mark a todo as complete
        this.tdm.markToDoComplete(2);

        // list all todos again
        this.tdm.listToDo();
    }

    /**
     * The main menu of the program.
     **/
    displayMainMenu() {
        // initialize prompt sync
        //const promptSync = require('prompt-sync');

        // welcome message
        console.log('Welcome!')
        console.log('This program is a Simple Todo App');

        // main menu loop
        while (true) {
            // display menu
            console.log('1. Add a new todo item');
            console.log("2. Remove a todo by it's ID");
            console.log('3. List all todos');
            console.log('4. Mark a todo as complete');
            console.log('5. Exit the Application');
            //console.log("Hit 'Enter' key to go back");
            

            // prompt user for input
            console.log('What would you like to do?');
            const action = this.prompt('Enter a number 1-5: ');
            console.log('\n');
            

            // validate input
            let action_num: number = 0;
            try {
                action_num = parseInt(action);
            } catch {
                console.log("\nPlease enter a number 1-5.")
                continue;
            }

            // Handle the flow of the program based on user input
            switch (action_num) {
                case 1:
                    this.addToDoMenu();
                    break;
                case 2:
                    this.removeToDoMenu();
                    break;
                case 3:
                    this.tdm.listToDo();
                    break;        
                case 4:
                    this.markCompleteMenu();
                    break;
                case 5:
                    console.log(`Exiting Application`);
                    process.exit(0);

                // user gives invalid input
                default:
                    console.log("\nPlease enter a number 1-5.\n")
            }
        }
    }

    /**
     * Menu displayed to the user when they indicate they would like to add an item to the
     * To Do List.
     */
    addToDoMenu() {
        let title: string = '';
        let description: string  = '';

        while (true) {
            console.log("What is the title of your 'To Do' item?");
            console.log("Hit 'Enter' key to go back");
            title = this.prompt('Title: ');

            console.log("What is the description of your 'To Do' item?");
            console.log("Hit 'Enter' key to go back");
            description = this.prompt('Description: ');

            if (!title || !description) {
                console.log("Going back...");
                break;
            }
         
            this.tdm.addToDo(title, description);
            console.log("To Do item added successfully");
            break;
        }
    }

    /**
     * Menu displayed to the user when they indicate they would like to remove an item from the
     * To Do List.
     */
    removeToDoMenu() {
        let id: string = '';

        while(true) {
            // get input
            console.log("What is the 'ID' of the 'To Do' you want to remove?");
            console.log("Hit 'Enter' key to go back");
            id = this.prompt('ID: ');
            // break if input not given
            if (!id) {
                console.log("Going back...");
                break;
            }
            // validate input format
            let id_num: number = 0;
            try {
                id_num = parseInt(id); 
            } catch {
                console.log("ID must be an integer");
                continue;
            }
            // break if we can't find that id
            if (!this.tdm.isValidId(id_num)) {
                console.log("ID not found");
                continue;
            }
            //execute the remove
            this.tdm.removeToDo(id_num);
            break;
        }
    }

    /**
     * Menu for promting user input when marking an item as complete.
     **/
    markCompleteMenu() {
        let id: string = '';

        while(true) {
            // get input
            console.log("What is the 'ID' of the 'To Do' item you want to mark complete?");
            console.log("Hit 'Enter' key to go back");
            id = this.prompt('ID: ');
            // break if input not given
            if (!id) {
                console.log("Going back...");
                break;
            }
            // validate input format
            let id_num: number = 0;
            try {
                id_num = parseInt(id); 
            } catch {
                console.log("ID must be an integer");
                continue;
            }
            // break if we can't find that id
            if (!this.tdm.isValidId(id_num)) {
                console.log("ID not found");
                continue;
            }
            //execute the mark complete
            this.tdm.markToDoComplete(id_num);
            break;
        }
        // 123
    }

}
