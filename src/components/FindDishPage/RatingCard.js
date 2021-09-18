import React from 'react';
import PropTypes from 'prop-types';
import distance from "../../utils/geoLocation";

const RatingCard = ({rating, coordinates}) => {  

  const distanceFromUser = distance(coordinates.longitude, coordinates.latitude, rating.Restaurant.longitude, rating.Restaurant.latitude)

  return (
    <>
      <div>{rating.Dish.name}</div>
      <div>{rating.rating}</div>
      <div>{rating.Restaurant.name}</div>
      <div>{distanceFromUser} KM from user</div>      
    </>
  );
};

RatingCard.propTypes = {

};


export default RatingCard;
