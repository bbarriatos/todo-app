import "./App.css";
import React, { useContext, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskView from "./components/task-view/TaskView";
import AddTask from "./routes/add-task/AddTask";

import { UserContext } from "./context/UserContext";
import Authentication from "./routes/authentication/Authentication";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<TaskView></TaskView>}></Route>
          <Route path="/:id" element={<TaskView></TaskView>}></Route>
          <Route path="/addTask" element={<AddTask></AddTask>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
