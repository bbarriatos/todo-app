import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TaskContext = createContext({
  tasks: [],
  setTasks: () => null,
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const value = { tasks, setTasks };
  const data = "https://jsonplaceholder.typicode.com/todos";

  const getTaskLists = async () =>
    await axios.get(data).then((task) => setTasks(task.data));

  useEffect(() => {
    getTaskLists();
  }, []);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
