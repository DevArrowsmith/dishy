import React, { useState, useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "../../../hooks/hooks";
// eslint-disable-next-line import/no-unresolved
import Burger from "./Burger";
// eslint-disable-next-line import/no-unresolved
import Menu from "./Menu";

const BurgerMenuContainer = styled.div`
  height: 50px;
  width: 60px;
  margin: 0;
  padding: 0;
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <BurgerMenuContainer ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
