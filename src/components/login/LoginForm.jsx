import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocument,
  signInUser,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [validationError, setValidationError] = useState(defaultFormFields);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => setValidationError(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    if (email.value === "") {
      setValidationError((errorFields) => ({
        ...errorFields,
        email: "Empty email",
      }));
    }

    if (password.value === "") {
      setValidationError((errorFields) => ({
        ...errorFields,
        password: "Empty Password",
      }));
    }

    try {
      if (password.value !== "" || email.value !== "") {
        const { user } = await signInUser(email.value, password.value);

        resetFormFields();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {validationError.email} <br></br>
        {validationError.password}
        <div>
          <span>email: </span>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <br></br>
        <div>
          <span>Password: </span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      <button onClick={logGoogleUser}>SignIn with Google Popup</button>
    </div>
  );
};

export default LoginForm;
