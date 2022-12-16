import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h2>Login Form</h2>
      <form action="/">
        <div>
          <span>Username: </span>
          <input type="text" required />
        </div>
        <br></br>
        <div>
          <span>Password: </span>
          <input type="password" required />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
