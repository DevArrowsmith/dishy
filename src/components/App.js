import React from "react";
import { HashRouter as Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import ReviewDishPage from "./ReviewDishPage/ReviewDishPage";
import FindDishPage from "./FindDishPage/FindDishPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import { UserProvider } from "../contexts/UserContext";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />

          <Route exact path="/review" component={() => <ReviewDishPage />} />

          <Route exact path="/find" component={() => <FindDishPage />} />
          <Route exact path="/signin" component={() => <LoginPage />} />
          <Route exact path="/Signup" component={() => <SignupPage />} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
