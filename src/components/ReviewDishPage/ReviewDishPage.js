import React, { useState } from "react";
import "../../styles/ReviewDishPage.css";
import getRestaurantsByLocation from "../../controllers/getRestaurantsByLocation";
<<<<<<< HEAD:src/components/RateDishPage/RateDishPage.js
import RatingForm from "./RatingForm";
import { saveRestaurant, saveDish, saveRating } from "../../controllers/backendControllers"
=======
import ReviewForm from "./ReviewForm";
>>>>>>> 5d04e5818ac2f8d5ebf4ab1ff38c663fdaad6853:src/components/ReviewDishPage/ReviewDishPage.js

import mockDishesList from '../../mockData/mockDishesList';

const ReviewDishPage = () => {

  const initialState = {
    location: "",
    restaurantsLoading: false,
    restaurantsList: [],
    review: {
      restaurant: "",
      dish: mockDishesList[0],//TODO: Set to "" once mock data is removed.
      rating: 10,
    },
    reviewSending: false,
    reviewSubmittedSuccess: "",
  };

  const [location, setLocation] = useState(initialState.location);

  const [restaurantsLoading, setRestaurantsLoading] = useState(initialState.restaurantsLoading);

  const [restaurantsList, setRestaurantsList] = useState(initialState.restaurantsList);

  const [review, setReview] = useState(initialState.review);

  const [reviewSending, setReviewSending] = useState(initialState.reviewSending);

  const [reviewSubmittedSuccess, setReviewSubmittedSuccess] = useState(initialState.reviewSubmittedSuccess);

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  };

  const handleRestaurantGet = async (event) => {
    event.preventDefault();
    const restaurantsData = await getRestaurantsByLocation(location);
    //console.log(restaurantsData); //TODO: Remove.
    await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    })
  };
/*
  const handleDishesGet = async (event) => {
//TODO: This handler will invoke the controller that gets a list of foods from our database.
setReview({
      ...review,
      dish: mockDishesList[0],
    })
  };
  handleDishesGet(); //TODO: Delete this line when the handler is properly set up.
*/
  
  const handleReviewChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

<<<<<<< HEAD:src/components/RateDishPage/RateDishPage.js
  const handleSubmitRatingForm = async (event) => {
=======
  const handleSubmitReviewForm = (event) => {
>>>>>>> 5d04e5818ac2f8d5ebf4ab1ff38c663fdaad6853:src/components/ReviewDishPage/ReviewDishPage.js
    event.preventDefault();
    const dish = await saveDish(review);
    const restaurant = await saveRestaurant(review);
    const newRating = await saveRating(review, restaurant.restaurant[0].id, dish.dish[0].id)
    //TODO: This component will invoke the form submission.
  }

    return (
      <>
        <div className="location-input">
          <label htmlFor="location">
            Enter a location:
            <input
              id="location"
              name="location"
              placeholder="15 North Street, Manchester"
              onChange={handleLocationChange}
              value={location}
            />
          </label>
          <button type="submit" onClick={handleRestaurantGet}>
            Search
          </button>

          <ReviewForm
            restaurantsList={restaurantsList}
            dishesList={mockDishesList}
            currentRating={review.rating}
            handleFieldChange={handleReviewChange}
            handleSubmitReviewForm={handleSubmitReviewForm}
          />
      </div>
    </>
  );
};

<<<<<<< HEAD:src/components/RateDishPage/RateDishPage.js
export default RateDishForm;
=======
export default ReviewDishPage;
>>>>>>> 5d04e5818ac2f8d5ebf4ab1ff38c663fdaad6853:src/components/ReviewDishPage/ReviewDishPage.js
