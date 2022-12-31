import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-lists">
      {tasks.length === 0 ? (
        <h2>No available task</h2>
      ) : (
        tasks.map((taskInfo) => (
          <Link key={taskInfo.id} to={`/${taskInfo.id}`} className="task">
            <p>
              <strong>ID: </strong> {taskInfo.id}
            </p>
            <p>
              <strong>Title: </strong> {taskInfo.title}
            </p>
            <p>
              <strong>Status: </strong> {String(taskInfo.completed)}
            </p>
          </Link>
        ))
      )}
    </div>
  );
};

export default TaskList;
