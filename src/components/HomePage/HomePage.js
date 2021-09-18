import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import "../../styles/HomePage.css";
import dishyLogo from '../../assets/dishy-logo-1.png';

const HomePage = () => {
  return (
    <div className="HomePage">


        <h1 className="HomePage-header" id="HomePage-header">
          <img src={dishyLogo} alt="DISHY"/>
        </h1>

        <h2 className="HomePage-title">
          <span>Welcome to your new favourite food</span>
        </h2>


      <Router className="HomePage-buttons-container">

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
    </div>
  );
};

export default HomePage;