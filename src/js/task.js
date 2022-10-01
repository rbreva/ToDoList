import { taskslist } from './taskslist.js';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static addTaskToList(task) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskItem = document.createElement('div');
    taskItem.classList.add('task__item');

    const taskCheck = document.createElement('div');
    taskCheck.classList.add('check');
    if (task.completed === true) {
      taskCheck.innerHTML = '<img src="images/check.svg" alt="check" />';
    } else {
      taskCheck.innerHTML = '<img src="images/checkbox.svg" alt="check" />';
    }

    const taskDesc = document.createElement('div');
    taskDesc.classList.add('task__desc');

    if (task.completed === true) {
      taskDesc.classList.add('complete');
    }

    taskDesc.innerHTML = `${task.description}`;

    const taskAction = document.createElement('div');
    taskAction.classList.add('task__action');
    taskAction.innerHTML = '<img class="task__action__move" src="images/move.svg" alt="move" />';

    taskItem.appendChild(taskCheck);
    taskItem.appendChild(taskDesc);

    taskDiv.appendChild(taskItem);
    taskDiv.appendChild(taskAction);

    tasksContainer.appendChild(taskDiv);
  }

}


export { Task }
