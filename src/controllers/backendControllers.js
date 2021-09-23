const axios = require("axios");

const getFilteredRating = async (search) => {
  return axios
    .post(`http://localhost:4000/rating/search`, { query: search })

    .then((response) => {
      const array = [];
      response.data.forEach((data) => {
        let obj = {};
        if (
          !array
            .map((restaurant) => restaurant.name)
            .includes(data.Restaurant.name)
        ) {
          obj = {
            dish: data.Dish.name,
            name: data.Restaurant.name,
            coordinates: {
              latitude: data.Restaurant.latitude,
              longitude: data.Restaurant.longitude,
            },
            address: {
              address1: data.Restaurant.address1,
              address2: data.Restaurant.address2,
              city: data.Restaurant.city,
              zip_code: data.Restaurant.zip_code,
            },
            comment: data.comment,
            scores: [data.rating],
          };
          array.push(obj);
        } else {
          const index = array.findIndex((i) => i.name === data.Restaurant.name);
          array[index].scores.push(data.rating);
        }
      });
      return {
        status: response.status,
        ratings: array,
      };
    });
};

const getDishes = async () => {
  return axios.get(`http://localhost:4000/dish/`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const getRatings = async () => {
  return axios.get(`http://localhost:4000/rating/all`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const getRestaurants = async () => {
  return axios.get(`http://localhost:4000/restaurant`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const saveRestaurant = async (review, targetRestaurant) => {
  const { coordinates, name, location } = targetRestaurant;
  return axios
    .post(`http://localhost:4000/restaurant`, {
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
    .post(`http://localhost:4000/dish`, {
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
    .post(`http://localhost:4000/rating`, {
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
