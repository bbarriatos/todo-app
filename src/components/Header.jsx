import React, { Fragment } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Task from "../routes/task/Task";

const Header = () => {
  const addForm = useNavigate();

  const addFormRedirect = () => {
    addForm("/addTask");
  };

  return (
    <Fragment>
      <header>
        Header - User Panel - Add Button
        <button onClick={addFormRedirect}>Add</button>
      </header>
      <div className="task-block">
        <Task></Task>
        <div className="task-view">
          <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
