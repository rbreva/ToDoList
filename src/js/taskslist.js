
const tasksStorage = localStorage.getItem('tasksList');
let taskslist = [];

if (tasksStorage === null) {
  taskslist = [];
} else {
  taskslist = JSON.parse(tasksStorage);
};

export { taskslist }