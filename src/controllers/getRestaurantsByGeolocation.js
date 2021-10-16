import axios from "axios";

const api = process.env.REACT_APP_API_URL;

const getRestaurantsByGeolocation = (latitude, longitude) => {
  return axios
    .get(`${api}restaurants/geolocation/${latitude}/${longitude}`)

    .then((response) => {
      return {
        status: response.status,
        restaurants: response.data.businesses,
      };
    });
};

/* TODO: Create error handling. */

export default getRestaurantsByGeolocation;
