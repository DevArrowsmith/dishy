import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp } from "../../controllers/loginControllers";

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

export default SignUpPage;
