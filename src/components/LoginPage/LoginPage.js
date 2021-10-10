/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { signIn } from "../../controllers/loginControllers";
import HomePage from "../HomePage/HomePage";

function LoginPage({ user, setUser }) {
  const initialState = {
    fields: { username: "", password: "" },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleFieldChange = (e) => {
    e.preventDefault();
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signIn(fields)
      .then((res) => {
        if (res.data.accessToken) {
          setUser({
            username: res.data.username,
            accessToken: res.data.accessToken,
          });
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="LoginPage">
      <h2 className="FindPage-header" id="FindPage-header">
        Login
      </h2>

      <div className="form-container">
        <form onChange={handleFieldChange}>
          username: <input name="username" />
          password: <input name="password" />
          <button type="submit" onClick={handleFormSubmit}>
            login
          </button>
        </form>
      </div>
      <Link to="/signup">not a member? Sign up</Link>
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
