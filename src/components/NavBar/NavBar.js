import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import "../../styles/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="NavBar" id="NavBar">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/rate">Rate</Link>
          <Link to="/find">Find</Link>
        </Router>
      </div>
    </>
  );
};

export default NavBar;