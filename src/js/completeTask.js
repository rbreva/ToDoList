import { taskslist } from './taskslist.js';

const completeTask = () => {
  const compTasks = document.querySelectorAll('.check__btn');
  compTasks.forEach((task, index) => {
    const inputComplete = task.parentNode.nextSibling.firstChild.classList;
    task.addEventListener('click', () => {
      if (inputComplete.value === 'task__input') {
        task.innerHTML = '<img src="images/check.svg" alt="check" />';
        inputComplete.add('complete');
        taskslist[index].completed = true;
        localStorage.setItem('tasksList', JSON.stringify(taskslist));
      } else {
        task.innerHTML = '<img src="images/checkbox.svg" alt="check" />';
        inputComplete.remove('complete');
        taskslist[index].completed = false;
        localStorage.setItem('tasksList', JSON.stringify(taskslist));
      }
    });
  });
};
/* eslint-disable */
export { completeTask };
