
import { useState, useEffect } from 'react';
import '../../styles/ReviewDishPage.css';
import getRestaurantsByGeolocation from '../../controllers/getRestaurantsByGeolocation';
import StillAtRestaurantSelector from './StillAtRestaurantSelector';
import SearchForRestaurant from './SearchForRestaurant';
import ReviewForm from './ReviewForm';
import reviewHeaderImage from '../../assets/review-image-1.png'
import mockDishesList from '../../mockData/mockDishesList';

const ReviewDishPage = () => {
  
  const initialState = {
    renderStillAtRestaurant: false,
    renderSearchForRestaurant: false,
    renderReviewForm: false,
    geolocation: {
      latitude: "a",
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



  const [restaurantsList, setRestaurantsList] = useState(initialState.restaurantsList);

  const [dishesList, setDishesList] = useState([]);

  const [review, setReview] = useState(initialState.review);

  const [renderStillAtRestaurantSelector, setRenderStillAtRestaurantSelector] = useState(initialState.renderStillAtRestaurant);

  const [renderSearchForRestaurant, setRenderSearchForRestaurant] = useState(initialState.renderSearchForRestaurant);


  const [renderReviewForm, setRenderReviewForm] = useState(initialState.renderReviewForm);

  const handleGetRestaurantsByGeolocation = async () => {

    let restaurantsData;
    restaurantsData = await getRestaurantsByGeolocation(geolocation.latitude, geolocation.longitude);

  await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    });

    console.log();
  };




  
  const handleReviewChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmitReviewForm = (event) => {
    event.preventDefault()
    console.log(review);
    //TODO: This component will invoke the form submission.
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
    console.log(geolocation);
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
          setRestaurantsList={setRestaurantsList}
          review={review}
          setReview={setReview}
          setRenderReviewForm={setRenderReviewForm}
        />

        <ReviewForm
          renderComponent={renderReviewForm}
          restaurantsList={restaurantsList}
          dishesList={mockDishesList}
          currentRating={review.rating}
          handleFieldChange={handleReviewChange}
          handleSubmitReviewForm={handleSubmitReviewForm}
        />

      </div>
    </div>
  );
};

export default ReviewDishPage;
