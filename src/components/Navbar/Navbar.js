import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "../../styles/Navbar.css";
import homeImage from "../../assets/dishy-logo-1.png";
import reviewImage from "../../assets/review-image-1.png";
import searchImage from "../../assets/search-image-1.png";

const Navbar = ({ user, setUser }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    setUser({ username: "", accessToken: "", id: "" });
    localStorage.clear();
  };

  return (
    <>
      <div className="Navbar" id="Navbar">
        <Link to="/">
          <img
            className="Navbar-image"
            id="Navbar-home-image"
            src={homeImage}
            alt="Home"
          />
        </Link>
        <div id="Navbar-right-links-container">
          {user.username ? (
            <>
              hello {user.username}
              <button type="submit" onClick={handleLogout}>
                logout
              </button>
              <Link to="/review">
                <img
                  className="Navbar-image"
                  id="Navbar-review-image"
                  src={reviewImage}
                  alt="Rate a Dish"
                />
              </Link>
            </>
          ) : (
            <Link to="/signin">log in</Link>
          )}

          <Link to="/find">
            <img
              className="Navbar-image"
              id="Navbar-search-image"
              src={searchImage}
              alt="Find a Dish"
            />
          </Link>

          <BurgerMenu />
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    accessToken: PropTypes.string,
    username: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  user: {
    id: 0,
    accessToken: "",
    username: "",
  },
};

export default Navbar;
