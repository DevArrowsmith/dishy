
import React, { useState, useEffect } from 'react';
import '../../styles/ReviewDishPage.css';
import getRestaurantsBySearch from '../../controllers/getRestaurantsBySearch';
import getRestaurantsByGeolocation from '../../controllers/getRestaurantsByGeolocation';
import StillAtRestaurantSelector from './StillAtRestaurantSelector';
import SearchForRestaurant from './SearchForRestaurant';
import ReviewForm from './ReviewForm';
import reviewHeaderImage from '../../assets/review-image-1.png'
import { getDishes, saveDish, saveRestaurant, saveRating } from '../../controllers/backendControllers';

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

  const [locationSearch, setLocationSearch] = useState(initialState.locationSearch);

  const [restaurantsList, setRestaurantsList] = useState(initialState.restaurantsList);

  const [dishesList, setDishesList] = useState([]);

  const [review, setReview] = useState(initialState.review);

  const [renderStillAtRestaurantSelector, setRenderStillAtRestaurantSelector] = useState(initialState.renderStillAtRestaurant);

  const [renderSearchForRestaurant, setRenderSearchForRestaurant] = useState(initialState.renderSearchForRestaurant);


  const [renderReviewForm, setRenderReviewForm] = useState(initialState.renderReviewForm);

  const handleLocationSearchChange = (event) => {
    setLocationSearch(event.target.value)
  };


  const handleGetRestaurantsByGeolocation = async () => {

    let restaurantsData;
    restaurantsData = await getRestaurantsByGeolocation(geolocation.latitude, geolocation.longitude);

  await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    });

  };

  const handleGetRestaurantsBySearch = async (event) => {
    event.preventDefault();

    let restaurantsData;
    restaurantsData = await getRestaurantsBySearch(locationSearch);
    
    await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    });

    setRenderReviewForm(true);
  }

  
  const handleReviewChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmitReviewForm = async (event) => {
    event.preventDefault();
    const coordinates = restaurantsList.find(restaurant=>restaurant.id===review.restaurant).coordinates;
    const targetRestaurant = restaurantsList.find(restaurant=>restaurant.id===review.restaurant)

    const newDish = await saveDish(review);
    const newRestaurant = await saveRestaurant (review, targetRestaurant);
    const newRating = await saveRating(review, newRestaurant.restaurant[0].id, newDish.dish[0].id)
  }

  const handleSetGeolocation = () => {
    const setGeolocationState = async(locationData) => {
      await setGeolocation({
        latitude: locationData.coords.latitude.toString(),
        longitude: locationData.coords.longitude.toString(),
      })
    } 

    window.navigator.geolocation.getCurrentPosition(setGeolocationState);
  };

  const pageSetup = async () => {
    await handleSetGeolocation();    
    const a = await getDishes ();
    setDishesList(a.dishes.map(dish => dish.name))
    await geolocation.latitude
    ? setRenderStillAtRestaurantSelector(true)
    : setRenderSearchForRestaurant(true)
  }

  useEffect(() => {
    pageSetup();
  }, []);

  const atRestaurantNowHandler = async () => {
    await setRenderSearchForRestaurant(false);
    await setRenderReviewForm(true);
    await setReview(initialState.review);
    handleGetRestaurantsByGeolocation();
  };

  const notAtRestaurantNowHandler = async () => {
    await setRenderReviewForm(false);
    await setRenderSearchForRestaurant(true);
    await setReview(initialState.review);
  };

  return (
    <div className="ReviewDishPage">

      <h2 className="ReviewPage-header" id="ReviewPage-header">
        <img src={reviewHeaderImage} alt="Rate a Dish"/>
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
          handleLocationChange={handleLocationSearchChange}
          handleGetRestaurants={handleGetRestaurantsBySearch}
          location={locationSearch}
        />

        <ReviewForm
          renderComponent={renderReviewForm}
          restaurantsList={restaurantsList}
          dishesList={dishesList}
          currentRating={review.rating}
          handleFieldChange={handleReviewChange}
          handleSubmitReviewForm={handleSubmitReviewForm}
        />

      </div>
    </div>
  );
};

export default ReviewDishPage;
