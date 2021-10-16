import axios from "axios";

const api = process.env.REACT_APP_API_URL;

const getRestaurantsBySearch = (location) => {
  return axios.get(`${api}restaurants/search/${location}`).then((response) => {
    return {
      status: response.status,
      restaurants: response.data.businesses,
    };
  });
};

/* TODO: Create error handling. */

export default getRestaurantsBySearch;
