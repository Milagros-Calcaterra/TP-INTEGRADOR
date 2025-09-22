// Lista de tareas con Local Storage

const entrada = document.getElementById('entrada-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const lista = document.getElementById('lista-tareas');

// ---- Paso 2: loadTasks ----
function loadTasks(){
  lista.innerHTML = '';
  const json = localStorage.getItem('tareas');
  const tareas = json ? JSON.parse(json) : [];
  tareas.forEach(texto => {
    const li = crearItem(texto);
    lista.appendChild(li);
  });
}

// ---- Utilidad: crear un <li> con eventos ----
function crearItem(texto){
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'texto';
  span.textContent = texto;

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'eliminar';
  btnEliminar.type = 'button';
  btnEliminar.setAttribute('aria-label','Eliminar tarea');
  btnEliminar.textContent = 'Eliminar';

  btnEliminar.addEventListener('click', () => {
    const ok = confirm('¿Eliminar esta tarea?');
    if(ok){
      li.remove();
      updateLocalStorage();
    }
  });

  li.append(span, btnEliminar);
  return li;
}

// ---- Paso 4: addTask ----
function addTask(){
  const texto = entrada.value.trim();
  if(!texto){
    alert('El campo no puede estar vacío.');
    entrada.focus();
    return;
  }
  const li = crearItem(texto);
  lista.appendChild(li);
  entrada.value = '';
  updateLocalStorage();
  entrada.focus();
}

// ---- Paso 5: evento en el botón ----
btnAgregar.addEventListener('click', addTask);

// ---- Paso 6: Enter en el input ----
entrada.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    addTask();
  }
});

// ---- Paso 7: updateLocalStorage ----
function updateLocalStorage(){
  const tareas = Array.from(lista.querySelectorAll('li .texto')).map(n => n.textContent);
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

// ---- Paso 3: cargar al iniciar ----
document.addEventListener('DOMContentLoaded', loadTasks);
