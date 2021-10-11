/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { signUp } from "../../controllers/loginControllers";

function SignUpPage({ user, setUser }) {
  const initialState = {
    fields: { username: "", password: "" },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleFieldChange = (e) => {
    e.preventDefault();
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signUp(fields)
      .then((res) => {
        console.log("successfully signed up!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="LoginPage">
      <h2 className="FindPage-header" id="FindPage-header">
        Sign Up
      </h2>

      <div className="form-container">
        <form onChange={handleFieldChange}>
          username: <input name="username" />
          email: <input name="email" />
          password: <input name="password" />
          <button type="submit" onClick={handleFormSubmit}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}

SignUpPage.propTypes = {};

export default SignUpPage;
