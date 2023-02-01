import { createAction } from "../../utils/reducer/reducer.utils";
import { TASK_ACTION_TYPES } from "./taskTypes";

export const setTasks = (tasks) =>
  createAction(TASK_ACTION_TYPES.SET_TASK, tasks);

export const addTask = (task) => createAction(TASK_ACTION_TYPES.ADD_TASK, task);
