import React, { useState, Fragment } from "react";
import "./TaskView.css";

const TaskView = ({ tasks }) => {
  return (
    <Fragment>
      <div className="task-view">
        <h1>Task Details</h1>
        <p>
          <strong>ID: </strong> 1
        </p>
        <p>
          <strong>Title: </strong>delectus aut autem
        </p>
        <p>
          <strong>Status: </strong> false
        </p>
      </div>
    </Fragment>
  );
};

export default TaskView;
