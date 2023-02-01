import React from "react";
import { useSelector } from "react-redux";
import { selectTask } from "../../store/task/taskSelector";

import { Link } from "react-router-dom";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector(selectTask);

  const renderTask = () =>
    tasks.task.map((taskInfo) => (
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
    ));

  return (
    <div className="task-lists">
      {tasks.length ? <h2>No available task</h2> : renderTask()}
    </div>
  );
};

export default TaskList;
