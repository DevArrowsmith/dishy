import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import homeImage from "../../assets/dishy-logo-1.png";
import reviewImage from "../../assets/review-image-1.png";
import searchImage from "../../assets/search-image-1.png";
import { UserContext } from "../../contexts/UserContext";

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
          {user.username && (
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
          )}

          <Link to="/find">
            <img
              className="Navbar-image"
              id="Navbar-search-image"
              src={searchImage}
              alt="Find a Dish"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
