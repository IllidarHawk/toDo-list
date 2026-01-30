// Array to store tasks
let tasks = [];
let taskIdCounter = 1;

//TODO : Add inputs or prompts for user input

/**
 * Function to add a new task.
 * @param {string} title - The task title.
 * @param {string} description - The task description.
 * @param {string} priority - The priority of the task (High, Medium, Low).
 * @param {string} dueDate - The due date of the task (format: YYYY-MM-DD).
 * @param {boolean} isCompleted - If task completed?
 */
function addTask(title, description, priority, dueDate) {
     // When invalid?
    if (!title) {
        alert("Cannot add task without title");
    } else {
        tasks.push({ 
            id: taskIdCounter++,
            title: title,
            description: description,
            priority: priority,
            dueDate: dueDate,
            isCompleted: false
        })
    }
    
    //TODO: add callback values to object properties
}

/**
 * Function to display all tasks.
 */
function viewTasks()

{
    //TODO : Can we omit the repeated "task."?

    //TODO : Add class to properties to CSS them

    //TODO : Add button next to each task title / under 
   
    for (const task of tasks) {
        document.querySelector("p").innerHTML +=
        `<span id="task${task.id}">
        <h3>Task ${task.id}</h3>
        Title: ${task.title} <br />
        Description: ${task.description} <br />
        Priority: ${task.priority} <br />
        Due date: ${task.dueDate} <br />
        </span>
        <br />`;
    }
}

/**
 * Function to mark a task as complete.
 * @param {number} id - The ID of the task to mark as complete.
 */
function markTaskAsComplete(id) {
    ;
}

/**
 * Function to delete a task.
 * @param {number} id - The ID of the task to delete.
 */
function deleteTask(id) {
    console.log(`deleteTask() called with id: ${id}`);
}

/**
 * Function to filter tasks by priority.
 * @param {string} priority - "High", "Medium", or "Low".
 */
function filterTasksByPriority(priority) {
    console.log(`filterTasksByPriority() called with priority: "${priority}"`);
}

/**
 * Function to filter tasks by overdue status.
 * @param {boolean} isOverdue - true for overdue tasks, false for upcoming tasks.
 */
function filterTasksByDueDate(isOverdue) {
    console.log(`filterTasksByDueDate() called with isOverdue: ${isOverdue}`);
}

/**
 * Function to filter tasks by completion status.
 * @param {boolean} isComplete - true for completed tasks, false for incomplete tasks.
 */
function filterTasksByCompletionStatus(isComplete) {
    console.log(`filterTasksByCompletionStatus() called with isComplete: ${isComplete}`);
}

/**
 * Function to sort tasks by priority.
 */
function sortTasksByPriority() {
    console.log("sortTasksByPriority() called - Sort tasks by priority");
}

/**
 * Function to sort tasks by due date.
 */
function sortTasksByDueDate() {
    console.log("sortTasksByDueDate() called - Sort tasks by due date");
}

/**
 * Function to edit a task's title, description, or due date.
 * @param {number} id - The ID of the task to edit.
 * @param {string} newTitle - The new title (optional).
 * @param {string} newDescription - The new description (optional).
 * @param {string} newDueDate - The new due date (optional).
 */
function editTask(id, newTitle, newDescription, newDueDate) {
    console.log(
        `editTask() called with id: ${id}, newTitle: "${newTitle || 'unchanged'}", newDescription: "${newDescription || 'unchanged'}", newDueDate: "${newDueDate || 'unchanged'}"`
    );
}

/**
 * Function to save tasks to localStorage.
 */
function saveTasks() {
    console.log("saveTasks() called - Save tasks to localStorage");
}

/**
 * Function to load tasks from localStorage.
 */
function loadTasks() {
    console.log("loadTasks() called - Load tasks from localStorage");
}

/**
 * Function to count tasks and display a summary.
 */
function countTasks() {
    console.log("countTasks() called - Display summary of tasks");
}

/* Sample Function Calls for Testing */

// Adding tasks with priority and due date
addTask("Buy Groceries", "Buy milk, eggs, and bread.", "High", "2024-06-20");
addTask("Clean Room", "Vacuum and mop the living room.", "Medium", "2024-06-25");
addTask("Study JavaScript", "Practice arrays, objects, and functions.", "Low", "2024-06-30");

// Viewing tasks
viewTasks();

// Marking a task as complete
markTaskAsComplete(2);

// Filtering tasks by priority
filterTasksByPriority("High");

// Filtering tasks by due date
filterTasksByDueDate(true); // Show overdue tasks
filterTasksByDueDate(false); // Show upcoming tasks

// Filtering tasks by completion status
filterTasksByCompletionStatus(false); // Show incomplete tasks

// Sorting tasks
sortTasksByPriority();
sortTasksByDueDate();

// Editing a task
editTask(1, "Buy Groceries and Snacks", "Buy milk, eggs, snacks, and bread.", "2024-06-21");
viewTasks();

// Deleting a task
deleteTask(3);
viewTasks();

// Saving and Loading tasks
saveTasks();
loadTasks();

// Counting tasks
countTasks();
