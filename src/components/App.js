import React, { useState, useEffect } from "react";
import { HashRouter as Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import ReviewDishPage from "./ReviewDishPage/ReviewDishPage";
import FindDishPage from "./FindDishPage/FindDishPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";

const App = () => {
  const initialState = {
    user: { username: "", accessToken: "", id: 0 },
  };
  const [user, setUser] = useState(initialState.user);
  useEffect(() => {
    if (localStorage.loggedInUser) {
      setUser(JSON.parse(localStorage.loggedInUser));
    }
  }, []);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <HomePage user={user} setUser={setUser} />}
        />

        <Route
          exact
          path="/review"
          component={() => <ReviewDishPage user={user} />}
        />

        <Route
          exact
          path="/find"
          component={() => <FindDishPage user={user} />}
        />
        <Route
          exact
          path="/signin"
          component={() => <LoginPage user={user} setUser={setUser} />}
        />
        <Route exact path="/Signup" component={() => <SignupPage />} />
      </Switch>
    </div>
  );
};

export default App;
