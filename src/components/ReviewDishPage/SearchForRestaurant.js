import React from "react";
import PropTypes from "prop-types";

const SearchForRestaurant = ({
  renderComponent,
  handleLocationChange,
  handleGetRestaurants,
  location,
}) => {
  if (renderComponent) {
    return (
      <div className="form-field">
        <label htmlFor="set-location">
          Enter the restaurant`&apos;`s address:
          <input
            id="set-location"
            className="form-input"
            name="set-location"
            placeholder="7 Main Street, Manchester"
            onChange={handleLocationChange}
            value={location}
          />
        </label>
        <button
          id="find-restaurant-submit-button"
          className="form-button"
          type="submit"
          onClick={handleGetRestaurants}
        >
          Search
        </button>
      </div>
    );
  }
  return null;
};

SearchForRestaurant.propTypes = {
  renderComponent: PropTypes.bool.isRequired,
  handleLocationChange: PropTypes.func.isRequired,
  handleGetRestaurants: PropTypes.func.isRequired,
  location: PropTypes.shape({
    latiude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};

SearchForRestaurant.defaultProps = {
  location: "",
};
export default SearchForRestaurant;
