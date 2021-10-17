import React, { useState } from "react";
import Creatable from "react-select/creatable";
import PropTypes from "prop-types";
import "../../../styles/ReviewForm.css";

const ReviewForm = ({
  renderComponent,
  restaurantsList,
  dishesList,
  setDishesList,
  handleFieldChange,
  currentRating,
  handleSubmitReviewForm,
  review,
  setReview,
}) => {
  const selectTable = dishesList.map((option) => ({
    label: option,
    value: option,
  }));

  const handleSetTest = (option, meta) => {
    if (meta.action === "create-option") {
      setDishesList([...dishesList, option.value]);
      setReview({
        ...review,
        dish: option.value,
      });
    }
    if (meta.action === "select-option") {
      setReview({
        ...review,
        dish: option.value,
      });
    }
  };

  const initialState = {
    buttonTimedOut: false,
  };

  const [buttonTimedOut, setButtonTimedOut] = useState(
    initialState.buttonTimedOut
  );

  /* eslint-disable no-param-reassign */
  const handleButtonTimeout = () => {
    setButtonTimedOut(true);
    setTimeout(() => {
      setButtonTimedOut(false);
    }, 2000);
  };
  /* eslint-enable no-param-reassign */

  const handleFormSubmit = (formData) => {
    handleButtonTimeout();
    handleSubmitReviewForm(formData);
  };

  if (renderComponent) {
    return (
      <>
        <div className="form-field">
          <label htmlFor="restaurant">
            Choose your restaurant:
            <select
              id="restaurant"
              className="form-input"
              name="restaurant"
              onChange={handleFieldChange}
              required
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

        <form onSubmit={handleFormSubmit}>
          <div className="form-field">
            <p className="select-food-header">What did you eat?</p>
            <p className="select-food-text">
              If it isn&apos;t in the list you can type it in!
            </p>
            <Creatable
              options={selectTable}
              name="dish"
              onChange={handleSetTest}
              id="creatable"
              required
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  boxShadow: "none",
                  border: state.isFocused && "none",
                }),
                menu: (provided) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused && "lightgray",
                  color: state.isFocused && "red",
                }),
              }}
            />
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
            <button
              type="submit"
              className={
                buttonTimedOut ? "pink-button button-flash" : "pink-button"
              }
              disabled={buttonTimedOut}
            >
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
  setDishesList: PropTypes.func.isRequired,
  setReview: PropTypes.func.isRequired,
  review: PropTypes.shape({
    dish: PropTypes.string,
    restaurant: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default ReviewForm;
