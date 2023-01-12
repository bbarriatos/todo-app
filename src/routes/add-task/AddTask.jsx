import { uuidv4 } from "@firebase/util";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import createNotification from "../../utils/notifications/notification";

const defaultFormFields = {
  id: '',
  title: '',
  userId: '',
  status: false
};

const AddTask = () => {
  const [task, setTask] = useState(defaultFormFields);
  const { addTask } = useContext(TaskContext);

  const AddTaskToList = (e) => {
    e.preventDefault();

    addTask({...task, id: uuidv4() });
    createNotification('success');
    setTask(defaultFormFields);
  };

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });


  return (
    <div>
      <h1>Add Task Form</h1>
      <form onSubmit={AddTaskToList}>
        <div>
          <span>Title </span>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
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
