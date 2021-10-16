import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "../../styles/Navbar.css";
import homeImage from "../../assets/dishy-logo-1.png";

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
            <div
              className="Navbar-text-container"
              id="Navbar-username-container"
            >
              <p>Hi</p>
              <p>{user.username}!</p>
            </div>
          ) : null}

          <BurgerMenu isLoggedIn={user.username} handleLogout={handleLogout} />
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
