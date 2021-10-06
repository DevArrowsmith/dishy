const axios = require("axios");

const getRestaurantsByGeolocation = (latitude, longitude) => {
  return axios
    .get(
      `https://dishymcr.herokuapp.com/restaurants/geolocation/${latitude}/${longitude}`
    )
    .then((response) => {
      return {
        status: response.status,
        restaurants: response.data.businesses,
      };
    });
};

/* TODO: Create error handling. */

export default getRestaurantsByGeolocation;
