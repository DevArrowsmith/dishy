
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../styles/ReviewDishPage.css";
import getRestaurantsByGeolocation from "../../controllers/getRestaurantsByGeolocation";
import StillAtRestaurantSelector from "./StillAtRestaurantSelector";
import SearchForRestaurant from "./SearchForRestaurant";
import ReviewForm from "./ReviewForm";
import reviewHeaderImage from "../../assets/review-image-1.png";
import ErrorMessage from './ErrorMessage';
import Message from '../genericComponents/Message';

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
  const [geolocation, setGeolocation] = useState(initialState.geolocation);

  const [restaurantsList, setRestaurantsList] = useState(
    initialState.restaurantsList
  );

  const [dishesList, setDishesList] = useState([]);

  const [review, setReview] = useState(initialState.review);

  const [renderStillAtRestaurantSelector, setRenderStillAtRestaurantSelector] =
    useState(initialState.renderStillAtRestaurant);

  const [renderSearchForRestaurant, setRenderSearchForRestaurant] = useState(
    initialState.renderSearchForRestaurant
  );

  const handleGetRestaurantsByGeolocation = async () => {

    let restaurantsData;
    restaurantsData = getRestaurantsByGeolocation(geolocation.latitude, geolocation.longitude);

  await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    });
  };

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

  const handleSetGeolocation = () => {
    const setGeolocationState = async (locationData) => {
      await setGeolocation({
        latitude: locationData.coords.latitude.toString(),
        longitude: locationData.coords.longitude.toString(),

      });
    };

    window.navigator.geolocation.getCurrentPosition(setGeolocationState);
  };

  const pageSetup = async () => {
    await handleSetGeolocation();
    const a = await getDishes();

    setDishesList(a.dishes.map((dish) => dish.name));
    await setReview({
      ...review,
      dish: dishesList[0],
    });
    // eslint-disable-next-line no-unused-expressions
    geolocation.latitude
      ? setRenderStillAtRestaurantSelector(true)
      : setRenderSearchForRestaurant(true);
  };

  useEffect(() => {
    "geolocation" in navigator
    ? setRenderStillAtRestaurantSelector(true)
    : setRenderSearchForRestaurant(true);
    handleSetGeolocation();
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
          renderComponent={renderStillAtRestaurantSelector}
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
