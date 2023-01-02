import React, { createContext, useState, useEffect } from "react";
import { getTodoDocument } from "../utils/firebase/firebase.utils";

const addTaskToList = (todoItem, todoToAdd) => {
  console.log(todoItem);
  return [...todoItem, { ...todoToAdd }];
};

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const todoList = async () => {
      const lists = await getTodoDocument("todos");

      setTasks(lists);
    };

    todoList();
  }, []);

  const addTask = (todoToAdd) => {
    setTasks(addTaskToList(tasks, todoToAdd));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
