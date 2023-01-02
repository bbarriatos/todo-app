import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";

const UpdateTask = () => {
  const { taskId } = useParams();
  const { tasks, setTasks } = useContext(TaskContext);
  const updateData = tasks.find((task) => task.id == taskId);
  const [title, setTitle] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { title } = title;

    console.log(title);
    // setTasks(title);
  };

  return (
    <div>
      <h1>Update Task Form</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <span>Title </span>
          <input
            type="text"
            value={title?.title}
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

export default UpdateTask;
