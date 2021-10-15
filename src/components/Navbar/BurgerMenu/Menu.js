import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import homeImage from "../../../assets/menu-image-home.png";
import rateDishImage from "../../../assets/menu-image-ratedish.png";
import findDishImage from "../../../assets/menu-image-finddish.png";
import loginImage from "../../../assets/menu-image-login.png";
import logoutImage from "../../../assets/menu-image-logout.png";
import signupImage from "../../../assets/menu-image-signup.png";

export const StyledMenu = styled.nav`
  position: absolute;
  z-index: 2;
  top: 80px;
  right: 0;
  height: calc(100vh - 80px - 40px);
  width: 260px;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.9);
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

const Navlink = styled(Link)`
  width: 100%;
  height: 70px;
  padding: 0 0px 0 0;
  font-family: "Contrail One", Helvetica, sans-serif;
  font-size: 1.8em;
  color: white;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const NavImage = styled.img`
  height: 60px;
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Navlink to="/">
        <NavImage
          className="Menu-image"
          id="Menu-image-home"
          src={homeImage}
          alt="Home"
        />
      </Navlink>

      <Navlink to="/signin">
        <NavImage
          className="Menu-image"
          id="Menu-image-login"
          src={loginImage}
          alt="Login"
        />
      </Navlink>

      <Navlink to="/signup">
        <NavImage
          className="Menu-image"
          id="Menu-image-signup"
          src={signupImage}
          alt="Sign Up"
        />
      </Navlink>

      <Navlink to="/find">
        <NavImage
          className="Menu-image"
          id="Menu-image-finddish"
          src={findDishImage}
          alt="Find Dish"
        />
      </Navlink>

      <Navlink to="/review">
        <NavImage
          className="Menu-image"
          id="Menu-image-ratedish"
          src={rateDishImage}
          alt="Rate Dish"
        />
      </Navlink>

      <Navlink to="/">
        <NavImage
          className="Menu-image"
          id="Menu-image-logout"
          src={logoutImage}
          alt="Log Out"
        />
      </Navlink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Menu;
