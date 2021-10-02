import React from "react";
import propTypes from "prop-types";

const DishSelector = ({ availableDishes, handleFilter }) => {
  return (
    <div className="find-dish-buttons">
      Find Dish:{" "}
      {availableDishes.map((dish) => (
        <button
          key={dish.id}
          type="submit"
          name={dish.name}
          onClick={handleFilter}
        >
          {dish.name}
        </button>
      ))}
    </div>
  );
};

DishSelector.propTypes = {
  availableDishes: propTypes.arrayOf({
    dish: propTypes.string,
  }).isRequired,
  handleFilter: propTypes.func.isRequired,
};

export default DishSelector;
