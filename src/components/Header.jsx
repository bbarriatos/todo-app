import React, { Fragment } from "react";

import { Outlet } from "react-router-dom";
import Task from "../routes/task/Task";

const Header = () => {
  return (
    <Fragment>
      <header>Header - User Panel - Add Button</header>
      <div className="task-block">
        <Task></Task>
        <Outlet></Outlet>
      </div>
    </Fragment>
  );
};

export default Header;
