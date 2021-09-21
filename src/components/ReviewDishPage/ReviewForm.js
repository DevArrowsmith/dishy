import PropTypes from "prop-types";
import "../../styles/ReviewForm.css";

const ReviewForm = ({ renderComponent, restaurantsList, dishesList, handleFieldChange, currentRating, handleSubmitReviewForm }) => {

  if (renderComponent) {
    return (
      <>
        <form onSubmit={handleSubmitReviewForm}>


          <div className="form-field">
            <label htmlFor="set-restaurant">
              Choose your restaurant:
              <select
                id="set-restaurant"
                className="form-input"
                name="set-restaurant"
                onChange={handleFieldChange}
              >
                {restaurantsList.map(restaurant => 
                  <option 
                    value={restaurant.id} 
                    key={restaurant.id
                  }>
                    {restaurant.name}
                  </option>)
                };
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
              {dishesList.map(dish => <option value={dish} key={dish}>{dish}</option>)}
              </select>
            </label>
          </div>

          <div 
            className="form-field"
            id="rating-form"
          >
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
          
          <div 
            id="review-submit-button"
            className="form-field"
          >
            <button type="submit"
            className="form-button">
              Rate it!
            </button>
          </div>

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
