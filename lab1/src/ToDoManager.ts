/**
 * Type that defines an item on a "To Do" list.
 */
type ToDo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

/**
 * A class used to manage all the various activities associated with a to do list.
 */
export class ToDoManager {

    private todo_list: ToDo[] = [];
    private next_id: number;

    constructor() {
        this.next_id = 1;
    }

    /**
     * Add an item to the "To Do" list.
     * @param title The name of the item on the "To Do" list.
     * @param description The description of the item on the "To Do" list.
     */
    addToDo(title: string, description: string): void {
        // create to do item
        const newToDo: ToDo = {
            id: this.next_id++,
            title: title,
            description: description,
            completed: false
        };

        // put to do item on to do list
        this.todo_list.push(newToDo);
        console.log(`To Do item '${title}' added\n`);
    }

    /**
     * Remove an item from the "To Do" list.
     * @param id The id of an item to identify it for removal.
     */
    removeToDo(id: number): void {
        for (let i = 0; i < this.todo_list.length; i++) {
            if (this.todo_list[i].id == id) {
                let title = this.todo_list[i].title;
                this.todo_list.splice(i, 1);
                console.log(`To Do item '${title}' removed\n`);
                return;
            }
        }
    }

    /**
     * Print the contents of the "To Do" list.
     */
    listToDo(): void {
        console.log(`------------------------------`);
        console.log('To Do List:');
        this.todo_list.forEach(todo => {
            console.log(`------------------------------`);
            console.log(`ID: ${todo.id}`);
            console.log(`Title: ${todo.title}`);
            console.log(`Description: ${todo.description}`);
            console.log(`Completed: ${todo.completed}\n`);
            console.log(`------------------------------`);
        })
        console.log(`\n`);
    }

    /**
     * Mark an item complete from the "To Do" list.
     * @param id The id of an item to identify it for marking complete.
     */
    markToDoComplete(id: number): void {
        this.todo_list.forEach(todo => {
            if(todo.id == id) {
                let title = todo.title;
                todo.completed = true;
                console.log(`To Do item '${title}' marked complete\n`);
                return;
            }
        })
    }

    // given a to do list id, return true if the the id is in the to do list
    // return false otherwise
    isValidId(id: number): boolean {
        let isValid = false;
        this.todo_list.forEach(todo => {
            if (todo.id == id) {
                isValid = true;
            }
        });
        return isValid;
    }

}