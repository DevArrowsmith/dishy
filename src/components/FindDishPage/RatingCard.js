import React, { useState } from "react";
import PropTypes from "prop-types";

function RatingCard({ rating }) {
  const [showScore, setShowScore] = useState(false);

  const handleScore = (e) => {
    e.preventDefault();
    setShowScore(!showScore);
  };
  return (
    <div className="rating-card">
      <div>
        {rating.name} ({rating.distance}m away){" "}
      </div>

      <div>
        {showScore ? (
          <div>
            {rating.scores.map((score) => (
              <div>{score}</div>
            ))}
            <div>{rating.address.address1}</div>
            <div>{rating.address.address2}</div>
            <div>{rating.address.city}</div>
            <div>{rating.address.zip_code}</div>
          </div>
        ) : (
          rating.averageScore
        )}
        <button type="submit" onClick={handleScore}>
          click
        </button>
      </div>
    </div>
  );
}

RatingCard.propTypes = {
  rating: PropTypes.shape({
    name: PropTypes.string,
    distance: PropTypes.number,
    averageScore: PropTypes.number,
    scores: PropTypes.arrayOf(PropTypes.number),
    address: PropTypes.shape({
      address1: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      zip_code: PropTypes.string,
    }),
  }).isRequired,
};

export default RatingCard;
