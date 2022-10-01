/* eslint-disable */
import { taskslist } from './taskslist.js';
import { showTasks } from './showTasks.js';
/* eslint-enable */
const editTask = () => {
  const inputTasks = document.querySelectorAll('.task__input');

  inputTasks.forEach((task, index) => {
    if (task.value === '') {
      taskslist.splice(index, 1);
      localStorage.setItem('tasksList', JSON.stringify(taskslist));
      showTasks();
    } else {
      taskslist[index].description = task.value;
      localStorage.setItem('tasksList', JSON.stringify(taskslist));
    }
  });
};
/* eslint-disable */
export { editTask };
