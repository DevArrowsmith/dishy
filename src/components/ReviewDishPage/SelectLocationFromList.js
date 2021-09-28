import React from "react";
import PropTypes from "prop-types";
import "../../styles/SelectLocationFromList.css";

const SelectLocationFromList = ({ restaurantsList, handleFieldChange }) => {
  return (
    <div className="form-field">
      <label htmlFor="set-restaurant">
        Choose your restaurant:
        <select
          id="set-restaurant"
          name="set-restaurant"
          onChange={handleFieldChange}
        >
          {restaurantsList.map((restaurant) => (
            <option value={restaurant.id} key={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
          ;
        </select>
      </label>
    </div>
  );
};

SelectLocationFromList.propTypes = {
  handleFieldChange: PropTypes.func.isRequired,
  restaurantsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default SelectLocationFromList;
