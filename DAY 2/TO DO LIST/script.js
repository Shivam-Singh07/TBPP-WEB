document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector('.add');
    const deleteButton = document.querySelector('.delete');
    const deleteAllButton = document.querySelector('.deleteAll');
    const mainDiv = document.querySelector('.main');
    let selectedTask = null;

    // Function to create a task element
    function createTaskElement(title, description) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        
        const taskText = document.createElement('span');
        taskText.innerText = `${title}: ${description}`;
        
        const deleteTaskButton = document.createElement('button');
        deleteTaskButton.innerText = 'Delete';
        
        // Add event listener for the delete button inside each task
        deleteTaskButton.addEventListener('click', function () {
            mainDiv.removeChild(taskDiv);
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteTaskButton);
        
        // Event listener to select a task
        taskDiv.addEventListener('click', function () {
            if (selectedTask) {
                selectedTask.style.backgroundColor = '#f2f2f2';
            }
            selectedTask = taskDiv;
            selectedTask.style.backgroundColor = '#d3d3d3';
        });

        return taskDiv;
    }

    // Add task
    addButton.addEventListener('click', function () {
        const title = document.querySelector('.taskTitle').value;
        const description = document.querySelector('.taskDescription').value;

        if (title && description) {
            const task = createTaskElement(title, description);
            mainDiv.appendChild(task);
        } else {
            alert('Please enter both a task title and description.');
        }
    });

    // Delete selected task
    deleteButton.addEventListener('click', function () {
        if (selectedTask) {
            mainDiv.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert('No task selected.');
        }
    });

    // Delete all tasks
    deleteAllButton.addEventListener('click', function () {
        mainDiv.innerHTML = '';
        selectedTask = null;
    });
});
