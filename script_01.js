//Tasking the user inputs from HTMl file
const inputBox = document.getElementById("input-box");
const prioritySelector = document.getElementById("priority-selector");
const addTaskBtn = document.getElementById("add-task-btn");
const listContainer = document.getElementById("list-container");
//Creating a array to store the list.
let userTask = JSON.parse(localStorage.getItem("savedTasks")) || [];
//For pointing out the empty entry by the user and making them enter task as compulsory.
addTaskBtn.addEventListener('click', () => {
    const userInput = inputBox.value;
    const userPriority = prioritySelector.value;
    if (userInput.trim() === "") {
        inputBox.classList.add('inputError');
        inputBox.placeholder = "This section cannot be empty !"
        inputBox.focus();
        return;
    }
    const newTask = {
        "taskTitle": userInput.trim(),
        "userPriority": prioritySelector.value,
        "status": "ongoing"
    };
    userTask.push(newTask);
    inputBox.classList.remove('inputError');
    inputBox.placeholder = "Enter Your Task";
    inputBox.value = "";

    addTask();
});
//Adding task also for the Enter Key
inputBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTaskBtn.click();
    }
});
//Correcting things after user wrtie after entring empty or whitespace in the input box.
inputBox.addEventListener('input', () => {
    inputBox.classList.remove('inputError');
    inputBox.placeholder = "Enter Your Task"
})

//Function to add the list on HTML.
function addTask() {
    localStorage.setItem("savedTasks", JSON.stringify(userTask));
    listContainer.innerHTML = "";
    //Thank you Gemini for the idea of index. I was about to make a seperate function for Counting.
    userTask.forEach((task, index) => {
        const completedClass = task.status === "done" ? "completed" : "";
        const isOngoingChecked = task.status === "ongoing" ? "checked" : "";
        const isDoneChecked = task.status === "done" ? "checked" : "";
        const addHTML = `
     <span class="col-sn">
            ${index + 1}
        </span>
        <span class="col-priority ${task.userPriority}">
            ${task.userPriority.toUpperCase()}
        </span>
        <span class="col-task ${completedClass}">
            ${task.taskTitle}
        </span>
        
        <input type="radio" name="done-${index}" data-index="${index}" value="ongoing" class="col-status-on radio-btn" ${isOngoingChecked}>
        <input type="radio" name="done-${index}" data-index="${index}" value="done" class="col-status-done radio-btn" ${isDoneChecked}>
        
        <button class="delete-btn" data-index="${index}">DELETE</button>
`;
        //Gemini gave me the idea of keeping the name same for particular group without being same for all the radio btns
        listContainer.innerHTML += addHTML;
    });
}
//Gemini helped in the below logic debuging as well
listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const taskIndex = event.target.getAttribute('data-index');
        userTask.splice(taskIndex, 1);
        addTask();
    }
    if (event.target.classList.contains('radio-btn')) {
        const taskIndex = event.target.getAttribute('data-index');
        const newStatus = event.target.value;
        userTask[taskIndex].status = newStatus;
        addTask();
    }
});
addTask();