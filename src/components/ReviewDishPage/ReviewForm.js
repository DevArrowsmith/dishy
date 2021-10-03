import React from "react";
import Creatable from "react-select/creatable";
import PropTypes from "prop-types";
import "../../styles/ReviewForm.css";

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
      setDishesList([...dishesList, option.value]);
      setReview({
        ...review,
        dish: option.value,
      });
    }
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

        <form onSubmit={handleSubmitReviewForm}>
          <div className="form-field">
            What did you eat?
            <Creatable
              options={selectTable}
              name="dish"
              onChange={handleSetTest}
              id="creatable"
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
            <button type="submit" className="pink-button">
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
