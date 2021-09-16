import React, { useState } from "react";
import getRestaurantsByLocation from "../../controllers/getRestaurantsByLocation";
import RatingForm from "./RatingForm";

import mockDishesList from '../../mockData/mockDishesList';

const RateDishForm = () => {

  const initialState = {
    location: "",
    restaurantsLoading: false,
    restaurantsList: [],
    review: {
      restaurant: "",
      dish: "",
      rating: "10",
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
    console.log(restaurantsData);
    await setRestaurantsList(restaurantsData.restaurants);
    console.log(restaurantsList);
  };
  
  const handleReviewChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitRatingForm = (event) => {
    event.preventDefault();
    console.log(review);
    //TODO: This component will invoke the form submission.
  }

  const generateLocationList = () => {
  };

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

          <RatingForm
            restaurantsList={restaurantsList}
            dishesList={mockDishesList}
            currentRating={review.rating}
            handleFieldChange={handleReviewChange}
            handleSubmitRatingForm={handleSubmitRatingForm}
          />
      </div>
    </>
  );
};

export default RateDishForm;
