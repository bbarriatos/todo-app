import { createAction } from "../../utils/reducer/reducer.utils";
import { TASK_ACTION_TYPES } from "./taskTypes";

export const setTasks = (tasks) =>
  createAction(TASK_ACTION_TYPES.SET_TASK, tasks);

export const addTask = (task) => createAction(TASK_ACTION_TYPES.ADD_TASK, task);

const removeTask = (taskItems, taskId) => {
  const checkTodo = taskItems.task.find((taskItem) => taskItem.id !== taskId);

  if (checkTodo) {
    const removedData = taskItems.task.filter(
      (taskItem) => taskItem.id !== taskId
    );

    return removedData;
  }
  return taskItems;
};

export const deleteTask = (taskItems, taskId) => {
  const newTaskList = removeTask(taskItems, taskId);

  return createAction(TASK_ACTION_TYPES.DELETE_TASK, newTaskList);
};
