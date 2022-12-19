import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserDocument,
  signUpUser,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formValidationFields = {
  displayName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [validationError, setValidationError] = useState(formValidationFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      displayName: username,
      email: user_email,
      password: user_password,
      confirmPassword,
    } = event.target;

    if (username.value == "") {
      setValidationError((errorFields) => ({
        ...errorFields,
        displayName: "Empty Username",
      }));
    }

    if (user_email.value == "") {
      setValidationError((errorFields) => ({
        ...errorFields,
        email: "Empty Email",
      }));
    }

    if (user_password.value != confirmPassword.value) {
      setValidationError((errorFields) => ({
        ...errorFields,
        password: "Password not match",
      }));
    }

    try {
      const userMail = user_email.value;
      const userPassword = user_password.value;
      const { user } = await signUpUser(userMail, userPassword);

      await createUserDocument(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormFields = () => setValidationError(formValidationFields);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>{validationError.displayName}</div>
        <div>
          <span>Username: </span>
          <input
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
        </div>
        <br></br>
        <div>{validationError.email}</div>
        <div>
          <span>E-mail: </span>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <br />
        <div>{validationError.password}</div>
        <div>
          <span>Password: </span>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <br></br>
        <div>
          <span>Re-type Password: </span>
          <input
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
};

export default SignUpForm;
