import { Task } from './task.js';

const addTast = () => {
  const addTaskBtn = document.querySelector('.newtask__btn');

  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newtask = document.querySelector('.newtask__input');

    if (newtask.value) {
      const task = new Task(newtask.value, false, '');
      Task.addTask(task);
      newtask.value = '';
    }
  });
};
/* eslint-disable import/prefer-default-export */
export { addTast };
