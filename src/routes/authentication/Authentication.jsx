import React from "react";
import LoginForm from "../../components/login/LoginForm";
import SignUpForm from "../../components/signup/SignUpForm";

const Authentication = () => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm></LoginForm>
      <br />
      <h2>Signup</h2>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
