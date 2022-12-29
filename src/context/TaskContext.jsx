import React, { createContext, useState, useEffect } from "react";
import { getTodoDocument } from "../utils/firebase/firebase.utils";

export const TaskContext = createContext({
  tasks: [],
});

export const TaskProvider = ({ children }) => {
  const [task, setTasks] = useState({});

  useEffect(() => {
    const todoList = async () => {
      const lists = await getTodoDocument("todos");

      setTasks(lists);
    };
    todoList();
  }, []);

  const value = { task };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
