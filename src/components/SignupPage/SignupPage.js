import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp } from "../../controllers/loginControllers";
import SignupHeaderImage from "../../assets/signup-image-1.png";
import "../../styles/SignupPage.css";

function SignUpPage() {
  const initialState = {
    fields: { username: "", password: "" },
  };
  const [fields, setFields] = useState(initialState.fields);

  const history = useHistory();

  const handleFieldChange = (e) => {
    e.preventDefault();
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signUp(fields)
      .then(() => {
        console.log("successfully signed up!");
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="SignupPage">
      <h2 className="SignupPage-header" id="SignupPage-header">
        <img src={SignupHeaderImage} alt="Sign Up" />
      </h2>

      <form className="SignupPage-form" onChange={handleFieldChange}>
        <label className="SignupPage-form-field" htmlFor="username">
          <p>username:</p>
          <input type="text" name="username" />
        </label>

        <label className="SignupPage-form-field" htmlFor="email">
          <p>email:</p>
          <input type="text" name="email" />
        </label>

        <label className="SignupPage-form-field" htmlFor="password">
          <p>password:</p>
          <input type="password" name="password" />
        </label>

        <button
          className="SignupPage-signup-button"
          type="submit"
          onClick={handleFormSubmit}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
