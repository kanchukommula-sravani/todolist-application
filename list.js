// Initialize an empty array to store tasks
let tasks = [];

// Function to display the tasks in the list
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ""; // Clear the list before rendering new tasks

    // Loop through tasks array and display each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim(); // Get task value and remove leading/trailing spaces

    if (newTask !== "") {
        tasks.push(newTask); // Add the new task to the tasks array
        taskInput.value = ""; // Clear the input field
        displayTasks(); // Update the task list on the page
    } else {
        alert("Please enter a task!");
    }
}

// Function to remove the last task from the list
function removeLastTask() {
    if (tasks.length > 0) {
        tasks.pop(); // Remove the last task from the array
        displayTasks(); // Update the task list on the page
    } else {
        alert("No tasks to remove!");
    }
}

// Function to clear all tasks
function clearAllTasks() {
    tasks = []; // Clear all tasks in the array
    displayTasks(); // Update the task list on the page
}

// Initial call to display tasks (if any)
displayTasks();