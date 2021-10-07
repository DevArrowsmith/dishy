/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../styles/ReviewDishPage.css";
import "../../styles/common/form.css";
import "../../styles/common/buttons.css";
import getRestaurantsByGeolocation from "../../controllers/getRestaurantsByGeolocation";
import StillAtRestaurantSelector from "./StillAtRestaurantSelector";
import SearchForRestaurant from "./SearchForRestaurant";
import ReviewForm from "./ReviewForm";
import reviewHeaderImage from "../../assets/review-image-1.png";

import {
  getDishes,
  saveDish,
  saveRestaurant,
  saveRating,
} from "../../controllers/backendControllers";

const ReviewDishPage = () => {
  const initialState = {
    renderStillAtRestaurant: false,
    renderSearchForRestaurant: false,
    renderReviewForm: false,
    geolocation: {
      latitude: "",
      longitude: "",
    },
    locationSearch: "",
    restaurantsList: [],
    review: {
      restaurant: "",
      dish: "",
      rating: 10,
    },
  };

  // Setters

  const [geolocation, setGeolocation] = useState(initialState.geolocation);
  const [restaurantsList, setRestaurantsList] = useState(
    initialState.restaurantsList
  );
  const [dishesList, setDishesList] = useState([]);

  const [review, setReview] = useState(initialState.review);

  // Component Render Toggles

  const [renderStillAtRestaurant, setRenderStillAtRestaurant] = useState(
    initialState.renderStillAtRestaurant
  );
  const [renderSearchForRestaurant, setRenderSearchForRestaurant] = useState(
    initialState.renderSearchForRestaurant
  );
  const [renderReviewForm, setRenderReviewForm] = useState(
    initialState.renderReviewForm
  );

  // State Setters

  const setUpDishes = async () => {
    const existingDishes = await getDishes();
    setDishesList(existingDishes.dishes.map((dish) => dish.name));
    await setReview({
      ...review,
      dish: dishesList[0],
    });
  };

  const handleSetGeolocation = () => {
    const setGeolocationState = async (locationData) => {
      await setGeolocation({
        latitude: locationData.coords.latitude.toString(),
        longitude: locationData.coords.longitude.toString(),
      });
    };

    window.navigator.geolocation.getCurrentPosition(setGeolocationState);
  };

  const handleGetRestaurantsByGeolocation = async () => {
    let restaurantsData;
    // eslint-disable-next-line prefer-const
    restaurantsData = await getRestaurantsByGeolocation(
      geolocation.latitude,
      geolocation.longitude
    );

    await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    });
  };

  // Event Handlers

  const handleReviewChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitReviewForm = async (event) => {
    event.preventDefault();
    const targetRestaurant = restaurantsList.find(
      (restaurant) => restaurant.id === review.restaurant
    );
    const newDish = await saveDish(review);
    const newRestaurant = await saveRestaurant(review, targetRestaurant);
    await saveRating(
      review,
      newRestaurant.restaurant[0].id,
      newDish.dish[0].id
    );
  };

  // Page Setup

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    "geolocation" in navigator
      ? setRenderStillAtRestaurant(true)
      : setRenderSearchForRestaurant(true);
    handleSetGeolocation();

    setUpDishes();
  }, []);

  const atRestaurantNowHandler = async () => {
    await handleGetRestaurantsByGeolocation();
    await setRenderSearchForRestaurant(false);
    await setRenderReviewForm(true);
    await setReview(initialState.review);
  };

  const notAtRestaurantNowHandler = async () => {
    await setRenderSearchForRestaurant(true);
    await setRenderReviewForm(false);
    await setReview(initialState.review);
  };

  return (
    <div className="ReviewDishPage">
      <h2 className="ReviewPage-header" id="ReviewPage-header">
        <img src={reviewHeaderImage} alt="Rate a Dish" />
      </h2>

      <div className="form-container">
        <StillAtRestaurantSelector
          renderComponent={renderStillAtRestaurant}
          atRestaurantNowHandler={atRestaurantNowHandler}
          notAtRestaurantNowHandler={notAtRestaurantNowHandler}
          handle
        />

        <SearchForRestaurant
          renderComponent={renderSearchForRestaurant}
          setRestaurantsList={setRestaurantsList}
          review={review}
          setReview={setReview}
          setRenderReviewForm={setRenderReviewForm}
        />

        <ReviewForm
          renderComponent={renderReviewForm}
          restaurantsList={restaurantsList}
          dishesList={dishesList}
          currentRating={review.rating}
          handleFieldChange={handleReviewChange}
          handleSubmitReviewForm={handleSubmitReviewForm}
          review={review}
          setReview={setReview}
          setDishesList={setDishesList}
        />
      </div>
    </div>
  );
};

export default ReviewDishPage;
