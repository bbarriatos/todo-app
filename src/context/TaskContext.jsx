import React, { createContext, useState, useEffect } from "react";
import { getTodoDocument } from "../utils/firebase/firebase.utils";

const addTaskToList = (todoItem, todoToAdd) => {
  return [...todoItem, { ...todoToAdd }];
};

const updateTaskToList = (todoItem, todoToUpdate) => {
  const findTask = todoItem.map((todo) => {
    if (todo.id == todoToUpdate.id) {
      todo.title = todoToUpdate.title;
    }

    return todo;
  });

  return findTask;
};

const deleteTaskToList = (todoItem, todoToDelete) => {
  const findTask = todoItem.filter((todo) => todo.id !== todoToDelete);

  return findTask;
};

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const todoList = async () => {
      const lists = await getTodoDocument("todos");

      console.log("tests", lists);
      setTasks(lists);
    };

    todoList();
  }, []);

  const addTask = (todoToAdd) => {
    setTasks(addTaskToList(tasks, todoToAdd));
  };

  const updateTask = (todoToUpdate) => {
    setTasks(updateTaskToList(tasks, todoToUpdate));
  };

  const deleteTask = (todoToDelete) => {
    setTasks(deleteTaskToList(tasks, todoToDelete));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
