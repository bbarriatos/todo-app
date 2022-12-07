import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "../../components/task-lists/TaskList";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const data = "https://jsonplaceholder.typicode.com/todos";

  const getTaskLists = async () =>
    await axios.get(data).then((task) => setTasks(task.data));

  useEffect(() => {
    getTaskLists();
  }, []);

  return <TaskList tasks={tasks}></TaskList>;
};
export default Task;
