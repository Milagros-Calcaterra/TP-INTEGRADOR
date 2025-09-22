const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("no dejes el espacio en blanco porfa!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function() {
    li.classList.toggle('completada');
  });

  
  li.addEventListener('dblclick', function() {
    const confirmar = confirm("estas seguro que vas a borrar esta tarea?");
    if (confirmar) {
      taskList.removeChild(li);
    }
  });

  taskList.appendChild(li); 
  taskInput.value = ""; // se borra el texto del input
}

addButton.addEventListener('click', addTask);
