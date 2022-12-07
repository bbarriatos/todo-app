import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import "./TaskView.css";

const TaskView = () => {
  const { id } = useParams();

  console.log("test", id);
  return (
    <div className="task-view">
      {id === undefined ? (
        <h1>Click task to view</h1>
      ) : (
        <Fragment>
          <h1>Task Details</h1>
          <p>
            <strong>ID: </strong> {id}
          </p>
          <p>
            <strong>Title: </strong>delectus aut autem
          </p>
          <p>
            <strong>Status: </strong> false
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default TaskView;
