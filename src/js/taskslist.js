const tasksStorage = localStorage.getItem('tasksList');
/* eslint-disable */
let taskslist = [];
/* eslint-enable */

if (tasksStorage === null) {
  taskslist = [];
} else {
  taskslist = JSON.parse(tasksStorage);
}

/* eslint-disable */
export { taskslist };