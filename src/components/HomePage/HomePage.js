import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import "../../styles/HomePage.css";

const HomePage = () => {
  return (
    <>

      <div className="HomePage-header">
        <p>Dishy! (header image goes here)</p>
        <p>Welcome to your new favourite food!</p>
      </div>

      <Router className="HomePage-buttonsContainer">

        <Link
          to="/find"
          className="HomePage-link-button"
          id="HomePage-link-button-find"
        >
          Find a Dish
        </Link>

        <Link
          to="/review"
          className="HomePage-link-button"
          id="HomePage-link-button-review"
          type="button"
        >
          Rate a Dish
        </Link>

      </Router>
    </>
  );
};

export default HomePage;