document.getElementById('task-giver').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('task-added');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.style.marginLeft = '1vh';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
        
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});
