import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import "./TaskView.css";

const TaskView = () => {
  const { id } = useParams();

  const { tasks } = useContext(TaskContext);

  const item = tasks.filter((data) => data.id == id);

  return (
    <div>
      {id === undefined ? (
        <h1>Click task to view</h1>
      ) : (
        <Fragment>
          <h1>Task Details</h1>
          {item.map((data) => {
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

                <Link to={`/updateTask/${data.id}`}>Edit</Link>
              </div>
            );
          })}
        </Fragment>
      )}
    </div>
  );
};

export default TaskView;
