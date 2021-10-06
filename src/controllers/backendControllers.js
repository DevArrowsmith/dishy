import rootAddress from "./rootAddress";

const axios = require("axios");

const getFilteredRating = async (search) => {
  return axios
    .post(`${rootAddress}rating/search`, { query: search })

    .then((response) => {
      return {
        status: response.status,
        ratings: response.data,
      };
    });
};

const getDishes = async () => {
  return axios.get(`${rootAddress}dish/`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const getRatings = async () => {
  return axios.get(`${rootAddress}rating/all`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const getRestaurants = async () => {
  return axios.get(`${rootAddress}restaurant`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const saveRestaurant = async (review, targetRestaurant) => {
  const { coordinates, name, location } = targetRestaurant;
  return axios
    .post(`${rootAddress}restaurant`, {
      yelp_id: review.restaurant,
      longitude: coordinates.longitude,
      latitude: coordinates.latitude,
      name,
      address1: location.address1,
      address2: location.address2,
      city: location.city,
      zip_code: location.zip_code,
    })
    .then((response) => {
      return {
        status: response.status,
        restaurant: response.data,
      };
    });
};

const saveDish = async (review) => {
  return axios
    .post(`${rootAddress}dish`, {
      name: review.dish,
    })
    .then((response) => {
      return {
        status: response.status,
        dish: response.data,
      };
    });
};

const saveRating = async (review, restaurantId, dishId) => {
  return axios
    .post(`${rootAddress}rating`, {
      rating: review.rating,
      comment: "placeholder comment",
      RestaurantId: restaurantId,
      DishId: dishId,
    })
    .then((response) => {
      return {
        status: response.status,
        rating: response.data,
      };
    });
};

/* TODO: Create error handling. */

module.exports = {
  saveRestaurant,
  saveDish,
  saveRating,
  getDishes,
  getRestaurants,
  getRatings,
  getFilteredRating,
};
