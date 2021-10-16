import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import homeImage from "../../assets/dishy-logo-1.png";
import { UserContext } from "../../contexts/UserContext";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.loggedInUser) {
      setUser(JSON.parse(localStorage.loggedInUser));
    }
  }, []);

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

export default Navbar;
