import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import TaskList from "./components/task-lists/TaskList";
import TaskView from "./components/task-view/TaskView";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState();

  const data = "https://jsonplaceholder.typicode.com/todos";

  const getTaskLists = async () =>
    await axios.get(data).then((task) => setTasks(task.data));

  useEffect(() => {
    getTaskLists();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div class="task-block">
        <TaskList tasks={tasks}></TaskList>
        <TaskView></TaskView>
      </div>
    </div>
  );
}

export default App;
