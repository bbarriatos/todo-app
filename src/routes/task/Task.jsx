import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import TaskList from "../../components/task-lists/TaskList";
import { getTodoDocument } from "../../utils/firebase/firebase.utils.js";
import { setTasks } from "../../store/task/taskAction";

const Task = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const todoList = async () => {
      const lists = await getTodoDocument("todos");

      dispatch(setTasks(lists));
    };

    todoList();
  }, []);

  return <TaskList></TaskList>;
};

export default Task;
