import { Menu } from './menu';
import { ToDoManager } from './ToDoManager';

// initialize the to do manager
const toDoManager = new ToDoManager();

// initialize the main menu with the to do manager
const menu = new Menu(toDoManager);

// tell the main menu to start displaying
menu.displayMainMenu();