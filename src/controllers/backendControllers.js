import axios from "axios";

const api = process.env.REACT_APP_API_URL;

const getFilteredRating = async (search) => {
  return axios
    .post(`${api}rating/search`, { query: search })
    .then((response) => {
      return {
        status: response.status,
        ratings: response.data,
      };
    });
};

const getDishes = async () => {
  return axios.get(`${api}dish/`).then((response) => {
    const tempArray = [...response.data];
    tempArray.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    return {
      status: response.status,
      dishes: tempArray,
    };
  });
};

const getRatings = async () => {
  return axios.get(`${api}rating/all`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const getRestaurants = async () => {
  return axios.get(`${api}restaurant`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const saveRestaurant = async (review, targetRestaurant) => {
  const { coordinates, name, location } = targetRestaurant;
  return axios

    .post(`${api}restaurant`, {
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
    .post(`${api}dish`, {
      name: review.dish,
    })
    .then((response) => {
      return {
        status: response.status,
        dish: response.data,
      };
    });
};

const saveRating = async (
  review,
  restaurantId,
  dishId,
  userId,
  accessToken
) => {
  return axios

    .post(
      `${api}rating`,
      {
        rating: review.rating,
        comment: "placeholder comment",
        RestaurantId: restaurantId,
        DishId: dishId,
        UserId: userId,
      },
      {
        headers: {
          "x-access-token": accessToken,
        },
      }
    )
    .then((response) => {
      return {
        status: response.status,
        rating: response.data,
      };
    });
};

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

const getRestaurantsBySearch = (location) => {
  return axios.get(`${api}restaurants/search/${location}`).then((response) => {
    return {
      status: response.status,
      restaurants: response.data.businesses,
    };
  });
};

/* TODO: Create error handling. */
export {
  saveRestaurant,
  saveDish,
  saveRating,
  getDishes,
  getRestaurants,
  getRatings,
  getFilteredRating,
  getRestaurantsByGeolocation,
  getRestaurantsBySearch,
};
