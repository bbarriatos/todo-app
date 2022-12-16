import React from "react";

const AddTask = () => {
  return (
    <div>
      <h1>Add Task Form</h1>
      <form action="/">
        <div>
          <span>Title </span>
          <input type="text" required />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
