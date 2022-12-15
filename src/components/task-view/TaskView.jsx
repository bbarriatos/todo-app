import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import "./TaskView.css";

const TaskView = () => {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);

  const taskDetails = tasks.filter((task) => task.id == id);

  const taskData = taskDetails.map((data) => {
    return (
      <div key={data.id}>
        <p>
          <strong>ID: </strong> {data.id}
        </p>
        <p>
          <strong>Title: </strong>
          {data.title}
        </p>
        <p>
          <strong>Status: </strong> {String(data.completed)}
        </p>
      </div>
    );
  });

  return (
    <div className="task-view">
      {id === undefined ? (
        <h1>Click task to view</h1>
      ) : (
        <Fragment>
          <h1>Task Details</h1>
          {taskData}
        </Fragment>
      )}
    </div>
  );
};

export default TaskView;
