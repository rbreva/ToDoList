import { Task } from './task.js';
import { taskslist } from './taskslist.js';
import { showTasks } from './showTasks.js';

const newTask = () => {
  const addTaskBtn = document.querySelector('.newtask__btn');

  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newtask = document.querySelector('.newtask__input');

    if (newtask.value) {
      const task = new Task(newtask.value, false, '');
      addTask(task);
      newtask.value = '';
    }
  });
};

const addTask = (task) => {
  const taskLength = taskslist.length;
  task.index = taskLength + 1;
  taskslist.push(task);
  localStorage.setItem('tasksList', JSON.stringify(taskslist));
  showTasks();
}

export { newTask, addTask, showTasks };