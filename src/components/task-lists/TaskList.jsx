import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-lists">
      {tasks.map((task) => (
        <div onClick={task.id} className="task">
          <p>
            <strong>ID: </strong> {task.id}
          </p>
          <p>
            <strong>Title: </strong> {task.title}
          </p>
          <p>
            <strong>Status: </strong> {String(task.completed)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
