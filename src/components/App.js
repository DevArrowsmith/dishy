import React, { useState } from "react";
import { HashRouter as Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import ReviewDishPage from "./ReviewDishPage/ReviewDishPage";
import FindDishPage from "./FindDishPage/FindDishPage";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./LoginPage/SignUpPage";

const App = () => {
  const initialState = {
    user: { username: "", accessToken: "" },
  };
  const [user, setUser] = useState(initialState.user);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <HomePage user={user} setUser={setUser} />}
        />

        <Route exact path="/review" component={() => <ReviewDishPage />} />

        <Route exact path="/find" component={() => <FindDishPage />} />
        <Route
          exact
          path="/signin"
          component={() => <LoginPage user={user} setUser={setUser} />}
        />
        <Route exact path="/signup" component={() => <SignUpPage />} />
      </Switch>
    </div>
  );
};

export default App;
