import PropTypes from "prop-types";
import "../../styles/ReviewForm.css";

const ReviewForm = ({ restaurantsList, dishesList, handleFieldChange, currentRating, handleSubmitReviewForm }) => {

  if (restaurantsList.length > 0) {
    return (
      <>
        <form onSubmit={handleSubmitReviewForm}>

          <label htmlFor="restaurant">
            Choose your restaurant:
            <select
              id="restaurant"
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

          <label htmlFor="dish">
            What did you eat?
            <select id="dish" name="dish" onChange={handleFieldChange}>
              {dishesList.map((dish) => (
                <option value={dish} key={dish}>
                  {dish}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="rating">
            Rate it!
            <input
              type="range"
              id="rating"
              name="rating"
              min="1"
              max="10"
              step="1"
              onChange={handleFieldChange}
            />
            <p>Your rating: {currentRating}</p>
          </label>

          <button type="submit"
          className="ReviewForm-submit-button">
            Rate it!
          </button>
        </form>
      </>
    );
  } else {
    return null;
  }
};

ReviewForm.propTypes = {
  restaurantsList: PropTypes.arrayOf(PropTypes.object),
  dishesList: PropTypes.arrayOf(PropTypes.string),
  handleFieldChange: PropTypes.func.isRequired,
  currentRating: PropTypes.string.isRequired,
  handleSubmitReviewForm: PropTypes.func.isRequired, 
};


export default ReviewForm;
