import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../styles/DishRatings.css";
import distance from "../../../utils/geoLocation";
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

  const sortByDistance = (e) => {
    e.preventDefault();
    const tempR = [...dishRatings];
    tempR.sort((a, b) => {
      if (a.distance > b.distance) {
        return 1;
      }
      if (b.distance > a.distance) {
        return -1;
      }
      return 0;
    });
    setDishRatings(tempR);
  };

  if (filteredRatings[0]) {
    return (
      <div id="DishRatings">
        <div id="sort-buttons-container">
          <button
            className="sort-button pink-button"
            type="submit"
            onClick={sortByRating}
          >
            Sort by Rating
          </button>
          <button
            className="sort-button pink-button"
            type="submit"
            onClick={sortByDistance}
          >
            Sort by Distance
          </button>
        </div>
        <div id="rating-cards">
          {dishRatings.map((rating) => (
            <RatingCard rating={rating} key={rating.name} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}

DishRatings.propTypes = {
  coordinates: PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number,
  }),
  filteredRatings: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.shape({
        address1: PropTypes.string,
        address2: PropTypes.string,
        city: PropTypes.string,
        zip_code: PropTypes.string,
      }),
      comment: PropTypes.string,
      coordinates: PropTypes.shape({
        longitude: PropTypes.number,
        latitude: PropTypes.number,
      }),
      dish: PropTypes.string,
      name: PropTypes.string,
      scores: PropTypes.arrayOf(PropTypes.num),
    })
  ),
};

DishRatings.defaultProps = {
  coordinates: {
    longitude: 0,
    latitude: 0,
  },
  filteredRatings: [],
};

export default DishRatings;
