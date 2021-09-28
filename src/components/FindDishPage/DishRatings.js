import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import distance from "../../utils/geoLocation";
import RatingCard from "./RatingCard";

function DishRatings({ filteredRatings, coordinates }) {
  const [dishRatings, setDishRatings] = useState([]);
  useEffect(() => {
    const restaurantArray = [];
    filteredRatings.forEach((ratings) => {
      const rating = {
        ...ratings,
        distance: Math.round(
          distance(
            coordinates.latitude,
            coordinates.longitude,
            ratings.coordinates.latitude,
            ratings.coordinates.longitude
          )
        ),
        averageScore:
          ratings.scores.reduce((a, b) => a + b, 0) / ratings.scores.length,
      };
      restaurantArray.push(rating);
    });
    setDishRatings(restaurantArray);
  }, [filteredRatings]);

  const sortByRating = (e) => {
    e.preventDefault();
    const tempR = [...dishRatings];
    tempR.sort((a, b) => {
      if (a.averageScore > b.averageScore) {
        return -1;
      }
      if (b.averageScore > a.averageScore) {
        return 1;
      }
      return 0;
    });
    setDishRatings(tempR);
  };

  return (
    <>
      Sort Dish:{" "}
      <button type="submit" onClick={sortByRating}>
        sort
      </button>
      {dishRatings.map((rating) => (
        <div key={rating.name}>
          <RatingCard rating={rating} />
        </div>
      ))}
    </>
  );
}

DishRatings.propTypes = {
  coordinates: PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number,
  }),
  filteredRatings: PropTypes.arrayOf({
    address: PropTypes.shape({
      address1: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      zip_code: PropTypes.string,
    }).isRequired,
    comment: PropTypes.string,
    coordinates: PropTypes.shape({
      longitude: PropTypes.number,
      latitude: PropTypes.number,
    }),
    dish: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    scores: PropTypes.arrayOf(PropTypes.num),
  }),
};

DishRatings.defaultProps = {
  coordinates: {
    longitude: 0,
    latitude: 0,
  },
  filteredRatings: [],
};

export default DishRatings;
