import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../store/task/taskAction";
import createNotification from "../../utils/notifications/notification";

const defaultFormFields = {
  id: "",
  title: "",
  userId: "",
  status: false,
};

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [taskInput, setTaskInput] = useState(defaultFormFields);

  const AddTaskToList = (e) => {
    e.preventDefault();

    dispatch(addTask({ ...taskInput, id: uuidv4() }));

    createNotification("success");
    setTaskInput(defaultFormFields);

    navigate("/");
  };

  const handleChange = (e) =>
    setTaskInput({ ...taskInput, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Add Task Form</h1>
      <form onSubmit={AddTaskToList}>
        <div>
          <span>Title </span>
          <input
            type="text"
            name="title"
            value={taskInput.title}
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
