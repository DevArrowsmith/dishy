import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBurger = styled.button`
  padding: 0;
  margin: 0;
  width: 55px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

  &:focus {
    outline: none;
  }

  div {
    margin: 0;
    padding: 0;
    width: 45px;
    height: 8px;
    background: white;
    border-radius: 5px;
    transition: all 0.3s linear;
    transform-origin: 2.25px;

    :first-child {
      background: ${({ open }) =>
        open
          ? "linear-gradient(130deg, #fcb0ff 0%, #fcb0ff 20%, #FA50FF 100%)"
          : "linear-gradient(130deg, #61FFE3 0%, #61FFE3 20%, #00A2F4 100%)"};
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      background: ${({ open }) =>
        open
          ? "linear-gradient(130deg, #fcb0ff 0%, #fcb0ff 20%, #FA50FF 100%)"
          : "linear-gradient(130deg, #61FFE3 0%, #61FFE3 20%, #00A2F4 100%)"};
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      background: ${({ open }) =>
        open
          ? "linear-gradient(130deg, #fcb0ff 0%, #fcb0ff 20%, #FA50FF 100%)"
          : "linear-gradient(130deg, #61FFE3 0%, #61FFE3 20%, #00A2F4 100%)"};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Burger;
