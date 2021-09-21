const axios = require('axios');

const getFilteredRating = async (search) => {
  return axios.post(`http://localhost:4000/rating/search`, {query: search})
  .then((response) => {

    let array = []
    response.data.forEach((data,i) => {
      let obj = {}
      if(!array.map((a)=>a.name).includes(data.Restaurant.name)){
        obj = {
          dish: data.Dish.name,
          name:data.Restaurant.name,
          coordinates:{
            latitude: data.Restaurant.latitude,
            longitude: data.Restaurant.longitude,
          },
          comment: data.comment,
          scores: [data.rating]
        }
        array.push(obj)  
      }else{
        array[i-1].scores.push(data.rating)
      }            
    })
    return({
      status: response.status,
      ratings: array
    })
  });
}

const getDishes = async () => {  
  return axios.get(`http://localhost:4000/dish/`)
  .then((response) => {
    return({
      status: response.status,
      dishes: response.data
    })
  });
};

const getRatings = async () => {  
  return axios.get(`http://localhost:4000/rating/all`)
  .then((response) => {
    return({
      status: response.status,
      dishes: response.data
    })
  });
};

const getRestaurants = async () => {  
  return axios.get(`http://localhost:4000/restaurant`)
  .then((response) => {
    return({
      status: response.status,
      dishes: response.data
    })
  });
};

const saveRestaurant = async (review, targetRestaurant) => { 
  const { name, coordinates } = targetRestaurant
  return axios.post(`http://localhost:4000/restaurant`, {
    yelp_id: review.restaurant,  
    longitude: coordinates.longitude,
    latitude: coordinates.latitude,
    name: name
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

module.exports = { saveRestaurant, saveDish, saveRating, getDishes, getRestaurants,getRatings, getFilteredRating }