const axios = require('axios');

const getRestaurantsBySearch = (location) => {
  return axios.get(`http://localhost:5000/restaurants/${location}`)
  .then((response) => {
    console.log(response)
    return({
      status: response.status,
      restaurants: response.data.businesses
    })
  });
};

/*TODO: Create error handling.*/

export default getRestaurantsBySearch;
