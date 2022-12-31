import React, { useContext } from "react";
import { useEffect } from "react";
import TaskList from "../../components/task-lists/TaskList";
import { TaskContext } from "../../context/TaskContext";

const Task = () => {
  const { tasks } = useContext(TaskContext);

  return <TaskList tasks={tasks}></TaskList>;
};

export default Task;
