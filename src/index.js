import './style.css';
import { newTask, showTasks } from './js/addTask.js';
import { clearAll } from './js/clearAll.js';

newTask();
clearAll();

document.addEventListener('DOMContentLoaded', showTasks);
