import { uuidv4 } from "@firebase/util";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../../context/TaskContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);

  const AddTaskToList = (e) => {
    e.preventDefault();

    addTask({
      completed: false,
      id: uuidv4(),
      title: title,
      userId: 12,
    });
  };

  return (
    <div>
      <h1>Add Task Form</h1>
      <form onSubmit={AddTaskToList}>
        <div>
          <span>Title </span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
