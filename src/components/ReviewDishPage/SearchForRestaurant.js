/* eslint-disable react/prop-types */
import React, { useState } from "react";
import getRestaurantsBySearch from "../../controllers/getRestaurantsBySearch";

const SearchForRestaurant = ({
  renderComponent,
  setRestaurantsList,
  review,
  setReview,
  setRenderReviewForm,
}) => {
  const initialState = {
    location: "",
  };

  const [location, setLocation] = useState(initialState.location);

  const getRestaurants = async (event) => {
    event.preventDefault();

    const restaurantsData = await getRestaurantsBySearch(location);

    await setRestaurantsList(restaurantsData.restaurants);
    await setReview({
      ...review,
      restaurant: restaurantsData.restaurants[0].id,
    });

    setRenderReviewForm(true);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  if (renderComponent) {
    return (
      <div className="form-field">
        <label htmlFor="set-location">
          Enter the restaurant`&apos;`s address:
          <input
            id="set-location"
            className="form-input"
            name="set-location"
            placeholder="7 Main Street, Manchester"
            onChange={handleLocationChange}
            value={location}
          />
        </label>
        <button
          id="find-restaurant-submit-button"
          className="form-button"
          type="submit"
          onClick={getRestaurants}
        >
          Search
        </button>
      </div>
    );
  }
  return null;
};

export default SearchForRestaurant;
