import React, { useState } from "react";
import "../../styles/ReviewDishPage.css";
import getRestaurantsByLocation from "../../controllers/getRestaurantsByLocation";
import { saveRestaurant, saveDish, saveRating, getDishes } from "../../controllers/backendControllers"
import ReviewForm from "./ReviewForm";

const ReviewDishPage = () => {  
  const initialState = {
    location: "",
    restaurantsLoading: false,
    restaurantsList: [],
    review: {
      restaurant: "",
      dish: "",
      rating: 10,
    },
    reviewSending: false,
    reviewSubmittedSuccess: "",
  };

  const [location, setLocation] = useState(initialState.location);

  const [restaurantsLoading, setRestaurantsLoading] = useState(initialState.restaurantsLoading);

  const [restaurantsList, setRestaurantsList] = useState(initialState.restaurantsList);

  const [dishesList, setDishesList] = useState([]);

  const [review, setReview] = useState(initialState.review);

  const [reviewSending, setReviewSending] = useState(initialState.reviewSending);

  const [reviewSubmittedSuccess, setReviewSubmittedSuccess] = useState(initialState.reviewSubmittedSuccess);

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  };

  const handleRestaurantGet = async (event) => {
    event.preventDefault();
    const restaurantsData = await getRestaurantsByLocation(location);
    await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    })
  };

  const handleDishesGet = async (event) => {
    event.preventDefault();
    let dishesData = await getDishes();
    await setDishesList(dishesData.dishes.map(dish=> dish.name));
    setReview({
        ...review,
        dish: dishesList[0],
      })
  }; 
  
  const handleReviewChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitReviewForm = async (event) => {
    event.preventDefault();
    const targetRestaurant = restaurantsList.find(restaurant=>restaurant.id===review.restaurant)
    const newDish = await saveDish(review);
    const newRestaurant = await saveRestaurant(review, targetRestaurant);
    const newRating = await saveRating(review, newRestaurant.restaurant[0].id, newDish.dish[0].id)
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
          <button type="submit" onClick={(event)=> {handleRestaurantGet(event);handleDishesGet(event)}}>
            Search
          </button>

          <ReviewForm
            restaurantsList={restaurantsList}
            dishesList={dishesList}
            currentRating={review.rating}
            handleFieldChange={handleReviewChange}
            handleSubmitReviewForm={handleSubmitReviewForm}
          />
      </div>
    </>
  );
};

export default ReviewDishPage;
