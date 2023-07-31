const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", AddTask);
taskList.addEventListener("click", RemoveTask);

function AddTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="removeButton">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function RemoveTask(event) {
    if (event.target.classList.contains("removeButton")) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
}
