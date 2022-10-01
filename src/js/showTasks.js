import { selectTask } from './selectTask.js';
import { taskslist } from './taskslist.js';

const tasksContainer = document.querySelector('.tasks');
const tasksCounter = document.querySelector('.todocount');

const showTasks = () => {
  tasksContainer.innerHTML = '';

  for (let i = 0; i < taskslist.length; i += 1) {
    addTaskToList(taskslist[i]);
  }

  if (taskslist.length > 0) {
    tasksCounter.innerHTML = '';
    tasksCounter.append(taskslist.length);
  }

  selectTask();
}

const addTaskToList = (task) => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const taskCheck = document.createElement('div');
  taskCheck.classList.add('check');

  const taskBtn = document.createElement('button');
  taskBtn.type = 'button';
  taskBtn.classList.add('check__btn');
  if (task.completed === true) {
    taskBtn.innerHTML = '<img src="images/check.svg" alt="check" />';
  } else {
    taskBtn.innerHTML = '<img src="images/checkbox.svg" alt="check" />';
  }

  const taskDesc = document.createElement('div');
  taskDesc.classList.add('task__desc');
  
  const inputTask = document.createElement('input');
  inputTask.classList.add('task__input');
  if (task.completed === true) {
    inputTask.classList.add('complete');
  }
  inputTask.disabled = true;
  inputTask.value = `${task.description}`;

  const taskAction = document.createElement('div');
  taskAction.classList.add('task__action');

  const taskBtnAction = document.createElement('button');
  taskBtnAction.type = 'button';
  taskBtnAction.classList.add('del__btn');
  taskBtnAction.innerHTML = '<img class="task__action__move" src="images/move.svg" alt="move" />';

  taskCheck.appendChild(taskBtn);
  taskDesc.appendChild(inputTask);
  taskAction.appendChild(taskBtnAction);

  taskDiv.appendChild(taskCheck);
  taskDiv.appendChild(taskDesc);
  taskDiv.appendChild(taskAction);

  tasksContainer.appendChild(taskDiv);
}

export { showTasks, addTaskToList }