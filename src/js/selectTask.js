import { deselectAllTasks, removeTask } from './removeTask.js';
import { editTask } from './editTask.js';
import { completeTask } from './completeTask.js';

const selectTask = () => {
  const selTasks = document.querySelectorAll('.task__desc');
  
  selTasks.forEach((task, index) =>{
    task.addEventListener('click', () => {
      const action = task.parentNode.querySelector('.task__action');
      const inputTask = task.querySelector('.task__input');
      if (task.parentNode.classList.value === 'task') {
        deselectAllTasks();
        task.parentNode.classList.add('active');
        action.innerHTML = '<img class="task__action__trash" src="images/trash.svg" alt="trash" />';
        inputTask.disabled = false;
        inputTask.focus();
        removeTask(index);
      } else {
        inputTask.disabled = true;
        task.parentNode.classList.remove('active');
        action.innerHTML = '<img class="task__action__move" src="images/move.svg" alt="move" />';
      }
      editTask();
    });

  });
  completeTask();
}

export { selectTask };