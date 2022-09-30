let taskslist = [];

const tasksContainer = document.querySelector('.tasks');
const tasksCounter = document.querySelector('.todocount');

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static showTasks() {
    const tasksStorage = localStorage.getItem('tasksList');
    tasksContainer.innerHTML = '';

    if (tasksStorage === null) {
      taskslist = [];
    } else {
      taskslist = JSON.parse(tasksStorage);
    }

    for (let i = 0; i < taskslist.length; i += 1) {
      Task.addTaskToList(taskslist[i]);
    }

    if (taskslist.length > 0) {
      tasksCounter.innerHTML = '';
      tasksCounter.append(taskslist.length);
    }

    Task.allTasks();
  }

  static allTasks() {
    const selTasks = document.querySelectorAll('.task__desc');
    for (let i = 0; i < selTasks.length; i = +1) {
      /* eslint-disable */
      selTasks[i].addEventListener('click', () => {
      /* eslint-enable */
        const action = selTasks[i].parentNode.querySelector('.task__action');
        const inputTask = selTasks[i].querySelector('.task__input');

        if (selTasks[i].parentNode.classList === 'task') {
          for (let j = 0; j < selTasks.length; j = +1) {
            selTasks[j].parentNode.classList.remove('active');
            selTasks[j].parentNode.querySelector('.task__action').innerHTML = '<img class="task__action__move" src="images/move.svg" alt="move" />';
          }

          selTasks[i].parentNode.classList.add('active');
          action.innerHTML = '<img class="task__action__trash" src="images/trash.svg" alt="trash" />';
        } else {
          selTasks[i].parentNode.classList.remove('active');
          action.innerHTML = '<img class="task__action__move" src="images/move.svg" alt="move" />';
        }

        const trashBtn = document.querySelector('.task__action__trash');

        inputTask.disabled = false;
        inputTask.focus();

        inputTask.addEventListener('keydown', (e) => {
          if (e.keyCode === 13) {
            if (inputTask.value === '') {
              taskslist.splice(`${i}`, 1);
            } else {
              taskslist[i].description = inputTask.value;
            }
            localStorage.setItem('tasksList', JSON.stringify(taskslist));
            Task.showTasks();
          }
        });

        trashBtn.addEventListener('click', (e) => {
          e.preventDefault();
          taskslist.splice(`${i}`, 1);
          localStorage.setItem('tasksList', JSON.stringify(taskslist));
          Task.showTasks();
        });
      });
    }
  }

  static addTaskToList(task) {
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
    if (task.completed === true) {
      taskDesc.classList.add('complete');
    }
    const inputTask = document.createElement('input');
    inputTask.classList.add('task__input');
    inputTask.disabled = true;
    inputTask.value = `${task.description}`;

    const taskAction = document.createElement('div');
    taskAction.classList.add('task__action');

    const taskBtnAction = document.createElement('button');
    taskBtnAction.type = 'button';
    taskBtnAction.classList.add('check__btn');
    taskBtnAction.innerHTML = '<img class="task__action__move" src="images/move.svg" alt="move" />';

    taskCheck.appendChild(taskBtn);
    taskDesc.appendChild(inputTask);
    taskAction.appendChild(taskBtnAction);

    taskDiv.appendChild(taskCheck);
    taskDiv.appendChild(taskDesc);
    taskDiv.appendChild(taskAction);

    tasksContainer.appendChild(taskDiv);
  }

  static addTask(task) {
    const taskLength = taskslist.length;
    task.index = taskLength + 1;
    taskslist.push(task);
    localStorage.setItem('tasksList', JSON.stringify(taskslist));
    Task.showTasks();
  }
}
/* eslint-disable import/prefer-default-export */
export { Task };
