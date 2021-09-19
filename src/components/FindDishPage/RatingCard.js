import React from 'react';
import PropTypes from 'prop-types';
import distance from "../../utils/geoLocation";

const RatingCard = ({rating, coordinates, visits, setVisits}) => {  

  const distanceFromUser = distance(rating.Restaurant.latitude,rating.Restaurant.longitude,coordinates.latitude,coordinates.longitude)

  const visit = {
    dish: rating.Dish.name,
    resutrant: rating.Restaurant.name
  }
  console.log(visit)
  setVisits(visits.push(visit))

  return (
    <>
      <div>{rating.rating}</div>
      <div>{rating.Restaurant.name}</div>
      <div>{Math.round(Number(distanceFromUser))} metres away</div>      
    </>
  );
};

RatingCard.propTypes = {

};


export default RatingCard;
