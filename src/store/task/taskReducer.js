import { TASK_ACTION_TYPES } from "./taskTypes";

const INITIAL_STATE = {
  task: [],
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASK_ACTION_TYPES.SET_TASK:
      return { ...state, task: payload };
    case TASK_ACTION_TYPES.ADD_TASK:
      state.task.push(payload);
      return state;
    default:
      return state;
  }
};
