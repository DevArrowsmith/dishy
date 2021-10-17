import React, { useState } from "react";
import PropTypes from "prop-types";

const StillAtRestaurantSelector = ({
  renderComponent,
  handleGetRestaurantsByGeolocation,
  setRenderSearchForRestaurant,
  setRenderReviewForm,
  setReview,
  initialReviewState,
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

  const atRestaurantNowHandler = async () => {
    await setReview(initialReviewState);
    await handleGetRestaurantsByGeolocation();
    await setRenderSearchForRestaurant(false);
    await setRenderReviewForm(true);
  };

  const notAtRestaurantNowHandler = async () => {
    await setReview(initialReviewState);
    await setRenderSearchForRestaurant(true);
    await setRenderReviewForm(false);
  };

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
            className={`pink-button stillAtRestaurantButton ${
              selectedButtons.yesButton && "disabled-pink-button"
            }`}
            onClick={() => !selectedButtons.yesButton && yesOnClick()}
          >
            Yes
          </button>

          <button
            type="submit"
            className={`pink-button stillAtRestaurantButton ${
              selectedButtons.noButton && "disabled-pink-button"
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
  handleGetRestaurantsByGeolocation: PropTypes.func.isRequired,
  setRenderSearchForRestaurant: PropTypes.func.isRequired,
  setRenderReviewForm: PropTypes.func.isRequired,
  setReview: PropTypes.func.isRequired,
  initialReviewState: PropTypes.shape({
    restaurant: PropTypes.string,
    dish: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};

export default StillAtRestaurantSelector;
