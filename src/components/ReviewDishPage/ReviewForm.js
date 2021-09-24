import PropTypes from "prop-types";
import React from "react";
import "../../styles/ReviewForm.css";

const ReviewForm = ({
  renderComponent,
  restaurantsList,
  dishesList,
  handleFieldChange,
  currentRating,
  handleSubmitReviewForm,
}) => {
  if (renderComponent) {
    return (
      <>
        <form onSubmit={handleSubmitReviewForm}>
          <div className="form-field">
            <label htmlFor="restaurant">
              Choose your restaurant:
              <select
                id="restaurant"
                className="form-input"
                name="restaurant"
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

          <div className="form-field">
            <label htmlFor="dish">
              What did you eat?
              <select
                id="dish"
                className="form-input"
                name="dish"
                onChange={handleFieldChange}
              >
                {dishesList.map((dish) => (
                  <option value={dish} key={dish}>
                    {dish}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-field" id="rating-form">
            <label htmlFor="rating">
              <p>Rate it!</p>
              <input
                type="range"
                id="rating-slider"
                name="rating"
                min="1"
                max="10"
                step="1"
                onChange={handleFieldChange}
              />
            </label>
            <div id="rating-value-display">
              <p>Your rating:</p>
              <p id="rating-value-number">{currentRating}</p>
            </div>
          </div>

          <div id="review-submit-button" className="form-field">
            <button type="submit" className="form-button">
              Rate it!
            </button>
          </div>
        </form>
      </>
    );
  }
  return null;
};

ReviewForm.propTypes = {
  renderComponent: PropTypes.bool.isRequired,
  restaurantsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dishesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  currentRating: PropTypes.number.isRequired,
  handleSubmitReviewForm: PropTypes.func.isRequired,
};

export default ReviewForm;
