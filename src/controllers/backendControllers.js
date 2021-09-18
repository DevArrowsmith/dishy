const axios = require('axios');

const saveRestaurant = async (review) => { 
  return axios.post(`http://localhost:4000/restaurant`, {
    yelp_id: review.restaurant,
  /*name: review.restaurant.name,
    longitude: review.restaurant.coordinates.longitude,
    latitude: review.restaurant.coordinates.latitude, */
  })
  .then((response) => {
    return({
      status: response.status,
      restaurant: response.data,
    })
  });  
};

const saveDish = async (review) => {  
  return axios.post(`http://localhost:4000/dish`, {
    name: review.dish,
  })
  .then((response) => {
    return({
      status: response.status,
      dish: response.data
    })
  });
};

const saveRating = async (review,restaurantId,dishId) => {
  return axios.post(`http://localhost:4000/rating`, {
  rating: review.rating,
  comment: "placeholder comment",
  RestaurantId: restaurantId,
  DishId: dishId
})
.then((response) => {
  return({
    status: response.status,
    rating: response.data
  })
});
}





/*TODO: Create error handling.*/

module.exports = { saveRestaurant, saveDish, saveRating }