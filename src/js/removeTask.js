/* eslint-disable */
import { taskslist } from './taskslist.js';
import { showTasks } from './showTasks.js';
/* eslint-enable */

const deselectAllTasks = () => {
  const selTasks = document.querySelectorAll('.task__desc');
  selTasks.forEach((task) => {
    task.parentNode.classList.remove('active');
    task.parentNode.querySelector('.task__action').innerHTML = '<img class="task__action__move" src="images/move.svg" alt="move" />';
  });
};

const removeTask = (index) => {
  const trashBtn = document.querySelector('.task__action__trash');

  trashBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taskslist.splice(index, 1);
    localStorage.setItem('tasksList', JSON.stringify(taskslist));
    showTasks();
  });
};

export { deselectAllTasks, removeTask };
