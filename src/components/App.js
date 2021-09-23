import React from "react";
import { HashRouter as Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import ReviewDishPage from "./ReviewDishPage/ReviewDishPage";
import FindDishPage from "./FindDishPage/FindDishPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />

        <Route exact path="/review" component={() => <ReviewDishPage />} />

        <Route exact path="/find" component={() => <FindDishPage />} />
      </Switch>
    </div>
  );
};

export default App;
