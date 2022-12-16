import "./App.css";
import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskView from "./components/task-view/TaskView";
import AddTask from "./routes/add-task/AddTask";
import LoginForm from "./routes/login/LoginForm";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginForm></LoginForm>}></Route>
        {/* <Route path="/" element={<Header></Header>}>
          <Route index element={<TaskView></TaskView>}></Route>
          <Route path="/:id" element={<TaskView></TaskView>}></Route>
          <Route path="/addTask" element={<AddTask></AddTask>}></Route>
        </Route> */}
      </Routes>
    </Fragment>
  );
}

export default App;
