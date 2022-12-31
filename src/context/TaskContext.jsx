import React, { createContext, useState, useEffect } from "react";
import { getTodoDocument } from "../utils/firebase/firebase.utils";

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState({});

  useEffect(() => {
    const todoList = async () => {
      const lists = await getTodoDocument("todos");

      setTasks(lists);
    };

    todoList();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
