import React from "react";
import propTypes from "prop-types";
import "../../styles/DishSelector.css";

const DishSelector = ({ availableDishes, handleFilterByDish }) => {
  return (
    <div className="form-field">
      <label htmlFor="set-dish">
        Choose a dish:
        <select
          id="set-dish"
          className="form-input"
          name="set-dish"
          onChange={handleFilterByDish}
        >
          <option
            selected
            disabled
            hidden
            style={{ display: "none" }}
            value=""
            aria-label="Please select one of the following options"
          />
          {availableDishes.map((dish) => (
            <option value={dish.name} key={dish.id}>
              {dish.name}
            </option>
          ))}
          ;
        </select>
      </label>
    </div>
  );
};

DishSelector.propTypes = {
  availableDishes: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
    })
  ).isRequired,
  handleFilterByDish: propTypes.func.isRequired,
};

export default DishSelector;
