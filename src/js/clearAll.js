import { taskslist } from './taskslist.js';
import { addTaskToList } from './showTasks.js';
import { selectTask } from './selectTask.js';

const clearAll = () => {

  const clearAllcompleted = document.querySelector('.clear__btn');

  clearAllcompleted.addEventListener('click', () => {

    let result = taskslist.filter(

        (task) => {
          if(task.completed === false){
            return true;
          }
        }
    
      );

    localStorage.setItem('tasksList', JSON.stringify(result));

    
    reloadTasks();
  });
  
}

const reloadTasks = () => {
  const tasksStorage = localStorage.getItem('tasksList');
  let taskslist = [];
  
  if (tasksStorage === null) {
    taskslist = [];
  } else {
    taskslist = JSON.parse(tasksStorage);
  };

  const tasksContainer = document.querySelector('.tasks');
  const tasksCounter = document.querySelector('.todocount');
  tasksContainer.innerHTML = '';
  
  for (let i = 0; i < taskslist.length; i += 1) {
    addTaskToList(taskslist[i]);
  }

  if (taskslist.length > 0) {
    tasksCounter.innerHTML = '';
    tasksCounter.append(taskslist.length);
  }

  selectTask();

  console.log(tasksContainer);
}


export { clearAll };

