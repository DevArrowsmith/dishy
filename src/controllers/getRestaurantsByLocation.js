const axios = require('axios');

const getRestaurantsByLocation = (location) => {
  return axios.get(`http://localhost:5000/restaurants/${location}`)
  .then((response) => {
    return({
      status: response.status,
      restaurants: response.data.businesses
    })
  });
};

/*TODO: Create error handling.*/

export default getRestaurantsByLocation;
