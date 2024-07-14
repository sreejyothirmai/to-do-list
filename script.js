const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const task = document.createElement('li');
    task.innerText = taskInput.value;

    taskList.appendChild(task);

    taskInput.value = '';
});

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
})