import React from "react";
import { Link } from "react-router-dom";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-lists">
      {tasks.map((task) => (
        <Link key={task.id} to={`/${task.id}`} className="task">
          <p>
            <strong>ID: </strong> {task.id}
          </p>
          <p>
            <strong>Title: </strong> {task.title}
          </p>
          <p>
            <strong>Status: </strong> {String(task.completed)}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default TaskList;
