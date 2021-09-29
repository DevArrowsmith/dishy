import React, { useState } from "react";
import PropTypes from "prop-types";

const StillAtRestaurantSelector = ({
  renderComponent,
  atRestaurantNowHandler,
  notAtRestaurantNowHandler,
}) => {
  const initialState = {
    selectedButtons: {
      yesButton: false,
      noButton: false,
    },
  };

  const [selectedButtons, setSelectedButtons] = useState(
    initialState.selectedButtons
  );

  const yesOnClick = () => {
    setSelectedButtons({
      yesButton: true,
      noButton: false,
    });
    atRestaurantNowHandler();
  };

  const noOnClick = () => {
    setSelectedButtons({
      yeButton: false,
      noButton: true,
    });
    notAtRestaurantNowHandler();
  };

  if (renderComponent) {
    return (
      <div className="form-field" id="StillAtRestaurantSelector">
        <p className="ReviewDishPage-text">Are you at the restaurant?</p>

        <div id="stillAtRestaurantButtonsContainer">
          <button
            type="submit"
            className={`form-button stillAtRestaurantButton ${
              selectedButtons.yesButton && "disabledButton"
            }`}
            onClick={() => !selectedButtons.yesButton && yesOnClick()}
          >
            Yes
          </button>

          <button
            type="submit"
            className={`form-button stillAtRestaurantButton ${
              selectedButtons.noButton && "disabledButton"
            }`}
            onClick={() => !selectedButtons.noButton && noOnClick()}
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
