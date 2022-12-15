import React, { useContext } from "react";
import TaskList from "../../components/task-lists/TaskList";
import { TaskContext } from "../../context/TaskContext";

const Task = () => {
  const { tasks } = useContext(TaskContext);

  return <TaskList task={tasks}></TaskList>;
};
export default Task;
