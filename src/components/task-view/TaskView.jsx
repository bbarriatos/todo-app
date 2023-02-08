import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteTask } from "../../store/task/taskAction";
import { selectTask } from "../../store/task/taskSelector";
import createNotification from "../../utils/notifications/notification";
import "./TaskView.css";

const TaskView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(selectTask);
  const item = tasks.task.filter((data) => data.id == id);

  const handleDelete = (todoData, todoId) => {
    dispatch(deleteTask(todoData, todoId));
    createNotification("warning");
    navigate("/");
  };

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
                <br />
                <button onClick={() => handleDelete(tasks, data.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </Fragment>
      )}
    </div>
  );
};

export default TaskView;
