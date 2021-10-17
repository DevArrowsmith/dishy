import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useOnClickOutside from "../../../../hooks/hooks";
// eslint-disable-next-line import/no-unresolved
import Burger from "./Burger";
// eslint-disable-next-line import/no-unresolved
import Menu from "./Menu";

const BurgerMenuContainer = styled.div`
  height: 50px;
  width: 56px;
`;

const BurgerMenu = ({ isLoggedIn, handleLogout }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <BurgerMenuContainer ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </BurgerMenuContainer>
  );
};

BurgerMenu.propTypes = {
  isLoggedIn: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default BurgerMenu;
