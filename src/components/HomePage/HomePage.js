import React from "react";
import { Link} from "react-router-dom";
import "../../styles/HomePage.css";
import dishyLogo from '../../assets/dishy-logo-1.png';

const HomePage = () => {
  return (
    <div className="HomePage">
      
      <h1 className="HomePage-header" id="HomePage-header">
        <img src={dishyLogo} alt="DISHY"/>
      </h1>


      <p className="HomePage-text">
        Dishy finds all the top-rated dishes in your location.
      </p>
      <p className="HomePage-text">
        Find the very best food near you!
      </p>

      <div className="HomePage-buttons-container">
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
      </div>
    </div>
  );
};

export default HomePage;