document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-task-button");
    const todoList = document.getElementById("todo-list");

    // Function to create a new to-do item
    function createTodoItem(taskText) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;
        span.style.cursor = "pointer";
        span.style.flex = "1";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Toggle complete on text click
        span.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Delete the task on button click
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    // Add task on button click
    addButton.addEventListener("click", () => {
        const task = input.value.trim();
        if (task) {
            createTodoItem(task);
            input.value = "";
            input.focus();
        }
    });

    // Add task on Enter key press
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addButton.click();
        }
    });
});
