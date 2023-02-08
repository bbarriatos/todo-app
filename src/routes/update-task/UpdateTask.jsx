import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectTask } from "../../store/task/taskSelector";
import { updateTask } from "../../store/task/taskAction";
import createNotification from "../../utils/notifications/notification";

const defaultFormFields = {
  id: "",
  title: "",
  userId: "",
};

const UpdateTask = () => {
  const [task, setTask] = useState(defaultFormFields);
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(selectTask);
  // const { tasks, updateTask } = useContext(TaskContext);

  useEffect(() => {
    const updateData = tasks.task.find((task) => task.id == parseInt(taskId));
    if (updateData) {
      setTask(updateData);
    }
  }, [taskId, tasks]);

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateTask(tasks, task));
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
