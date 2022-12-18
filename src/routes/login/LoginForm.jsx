import React from "react";
import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

const LoginForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

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

      <button onClick={logGoogleUser}>SignIn with Google Popup</button>
    </div>
  );
};

export default LoginForm;
