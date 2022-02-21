function addTasks(event) {
  const theEvent = event.target;
  const textInputValue = document.getElementById('texto-tarefa').value;
  const tasksButton = document.getElementById('criar-tarefa');
  if (theEvent === tasksButton && textInputValue !== '') {
    const addTask = document.createElement('li');
    addTask.innerHTML = textInputValue;
    addTask.className = 'the-task';
    document.getElementById('lista-tarefas').appendChild(addTask);
    document.getElementById('texto-tarefa').value = '';
  }
}

document.addEventListener('click', addTasks);

const ol = document.getElementById('lista-tarefas');

function selectItem(event) {
  const theEvent = event.target;
  const allTasks = document.querySelectorAll('.the-task');
  if (theEvent.className === 'the-task') {
    for (let i = 0; i < allTasks.length; i += 1) {
      allTasks[i].style.backgroundColor = '';
      allTasks[i].classList.remove('selected');
    }
    theEvent.style.backgroundColor = 'rgb(128,128,128)';
    theEvent.classList.add('selected');
  }
}

document.addEventListener('click', selectItem);

function completed(event) {
  const theEvent = event.target;
  if (theEvent.classList.contains('the-task') && !theEvent.classList.contains('completed')) {
    theEvent.classList.add('completed');
  } else if (theEvent.classList.contains('completed')) {
    theEvent.classList.remove('completed');
  }
}

document.addEventListener('dblclick', completed);

function deleteAllTasks(event) {
  const theEvent = event.target;
  const eraseButton = document.getElementById('apaga-tudo');
  const liTask = document.querySelectorAll('.the-task');
  if (theEvent === eraseButton) {
    for (let i = 0; i < liTask.length; i += 1) {
      ol.removeChild(liTask[i]);
    }
  }
}

document.addEventListener('click', deleteAllTasks);

function removeCompleteTask(event) {
  const theEvent = event.target;
  const completedTasks = document.querySelectorAll('.completed');
  const taskRemover = document.getElementById('remover-finalizados');
  if (theEvent === taskRemover) {
    for (let i = 0; i < completedTasks.length; i += 1) {
      ol.removeChild(completedTasks[i]);
    }
  }
}

document.addEventListener('click', removeCompleteTask);

function removeSelectedTask(event) {
  const theEvent = event.target;
  const theTasks = document.querySelectorAll('.the-task');
  const remover = document.getElementById('remover-selecionado');
  for (let i = 0; i < theTasks.length; i += 1) {
    if (theEvent === remover && theTasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      ol.removeChild(theTasks[i]);
    }
  }
}

document.addEventListener('click', removeSelectedTask);

const toAbove = document.getElementById('mover-cima');
const toBelow = document.getElementById('mover-baixo');

function moveTaskToAbove() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const previousItem = selectedTask.previousElementSibling;
    if (previousItem) {
      ol.insertBefore(previousItem, selectedTask.nextElementSibling);
    }
  }
}

toAbove.addEventListener('click', moveTaskToAbove);

function moveTaskToBelow() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const nextItem = selectedTask.nextElementSibling;
    if (nextItem) {
      ol.insertBefore(nextItem, selectedTask);
    }
  }
}

toBelow.addEventListener('click', moveTaskToBelow);

/* Functions moveTaskToAbove() e moveTaskToBelow() inspiradas no projeto de raphaelalmeidamartins, Link: https://github.com/tryber/sd-019-a-project-todo-list/tree/raphael-martins-todo-list-project,
   pude aprender bastante. */
