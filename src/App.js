import "./App.css";
import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskView from "./components/task-view/TaskView";
import AddTask from "./routes/add-task/AddTask";

import Authentication from "./routes/authentication/Authentication";
import UpdateTask from "./routes/update-task/UpdateTask";
import {
  createUserDocument,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/userAction";
import { selectCurrentUser } from "./store/user/userSelector";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? <Header></Header> : <Authentication></Authentication>
          }
        >
          <Route index element={<TaskView></TaskView>}></Route>
          <Route path="/:id" element={<TaskView></TaskView>}></Route>
          <Route path="/addTask" element={<AddTask></AddTask>}></Route>
          <Route
            path="/updateTask/:taskId"
            element={<UpdateTask></UpdateTask>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
