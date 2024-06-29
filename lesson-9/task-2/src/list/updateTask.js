import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onDeleteButtonClick = (e) => {
  if (e.target.classList.contains('list__item_delete-btn')) {
    const taskId = e.target.dataset.id;

    deleteTask(taskId)
      .then(() => {
        console.log(`Task with ID ${taskId} deleted successfully`);
        return getTasksList();
      })
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  }
};

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const task = tasksList.find((task) => task.id === taskId);

  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
