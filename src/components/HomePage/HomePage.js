/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/HomePage.css";
import dishyLogo from "../../assets/dishy-logo-1.png";

const HomePage = ({ user }) => {
  return (
    <div className="HomePage">
      <h1 className="HomePage-header" id="HomePage-header">
        <img src={dishyLogo} alt="DISHY" />
      </h1>

      <p className="HomePage-text">
        Dishy finds all the top-rated dishes in your location.
      </p>
      <p className="HomePage-text">Find the very best food near you!</p>

      <div className="HomePage-buttons-container">
        <Link
          to="/find"
          className="HomePage-link-button"
          id="HomePage-link-button-find"
        >
          Find a Dish
        </Link>
        {user.username && (
          <Link
            to="/review"
            className="HomePage-link-button"
            id="HomePage-link-button-review"
            type="button"
          >
            Rate a Dish
          </Link>
        )}
        {!user.username && (
          <Link
            to="/signin"
            className="HomePage-link-button"
            id="HomePage-link-button-login"
            type="button"
          >
            Log In
          </Link>
        )}
      </div>
      {!user.username && (
        <Link
          to="/signup"
          className="HomePage-link-button"
          id="HomePage-link-button-signup"
          type="button"
        >
          Create an account
        </Link>
      )}
    </div>
  );
};

export default HomePage;
