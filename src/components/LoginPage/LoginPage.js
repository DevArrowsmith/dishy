import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { signIn } from "../../controllers/loginControllers";
import loginHeaderImage from "../../assets/login-image-2.png";
import "../../styles/LoginPage.css";
import { UserContext } from "../../contexts/UserContext";

function LoginPage() {
  const initialState = {
    fields: { username: "", password: "" },
  };

  const [fields, setFields] = useState(initialState.fields);
  const { setUser } = useContext(UserContext);

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
          const loggedInUser = {
            username: res.data.username,
            accessToken: res.data.accessToken,
            id: res.data.id,
          };
          setUser(loggedInUser);
          localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="LoginPage">
      <h2 className="LoginPage-header" id="LoginPage-header">
        <img src={loginHeaderImage} alt="Log In" />
      </h2>

      <form className="LoginPage-form" onChange={handleFieldChange}>
        <label className="LoginPage-form-field" htmlFor="username">
          <p>username:</p>
          <input type="text" name="username" />
        </label>

        <label className="LoginPage-form-field" htmlFor="password">
          <p>password:</p>
          <input type="password" name="password" />
        </label>

        <button
          className="LoginPage-login-button"
          type="submit"
          onClick={handleFormSubmit}
        >
          login
        </button>
      </form>

      <Link className="LoginPage-signup-button" to="/signup">
        Not a member? Sign up!
      </Link>
    </div>
  );
}
export default LoginPage;
