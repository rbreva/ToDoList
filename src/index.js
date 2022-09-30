import _ from 'lodash'; // eslint-disable-line
import './style.css';
import { Task } from './js/task.js';
import { addTast } from './js/addTask.js';

addTast();

document.addEventListener('DOMContentLoaded', Task.showTasks);
