import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { taskReducer } from "./task/taskReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
});
