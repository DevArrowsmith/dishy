import React from "react";
import PropTypes from "prop-types";

const StillAtRestaurantSelector = ({
  renderComponent,
  atRestaurantNowHandler,
  notAtRestaurantNowHandler,
}) => {
  if (renderComponent) {
    return (
      <div className="form-field" id="StillAtRestaurantSelector">
        <p className="ReviewDishPage-text">Are you at the restaurant?</p>

        <div id="stillAtRestaurantButtonsContainer">
          <button
            type="submit"
            className="form-button stillAtRestaurantButton"
            onClick={atRestaurantNowHandler}
          >
            Yes
          </button>

          <button
            type="submit"
            className="form-button stillAtRestaurantButton"
            onClick={notAtRestaurantNowHandler}
          >
            No
          </button>
        </div>
      </div>
    );
  }
  return null;
};

StillAtRestaurantSelector.propTypes = {
  renderComponent: PropTypes.bool.isRequired,
  atRestaurantNowHandler: PropTypes.func.isRequired,
  notAtRestaurantNowHandler: PropTypes.func.isRequired,
};

export default StillAtRestaurantSelector;
