import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import createNotification from "../../utils/notifications/notification";

const defaultFormFields = {
  id: "",
  title: "",
  userId: "",
};

const UpdateTask = () => {
  const [task, setTask] = useState(defaultFormFields);
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TaskContext);

  useEffect(() => {
    const updateData = tasks.find((task) => task.id == parseInt(taskId));
    if (updateData) {
      setTask(updateData);
    }
  }, [taskId, tasks]);

  const handleUpdate = (e) => {
    e.preventDefault();

    updateTask(task);
    createNotification("info");
    navigate("/");
  };

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Update Task Form</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <span>Title: </span>
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

export default UpdateTask;
