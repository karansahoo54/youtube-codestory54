const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Add event listener for task completion (checkbox or click)
  listItem.addEventListener('click', () => {
    listItem.classList.toggle('completed'); // Toggle completed class
    // Add animation here (e.g., fade out/in)
  });

  taskList.appendChild(listItem);

  // Add animation here (e.g., slide-in from the top)
}

// Add functions for animation (e.g., using CSS transitions or animations)

// Example of a simple animation (fade-in):
function fadeIn(element) {
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.opacity = 1;
  }, 10); // Adjust delay as needed
}

//Use fadeIn(listItem) after adding the listItem to the taskList
