import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRatings } from '../../controllers/backendControllers';
function RatingCard({ rating }) {
  const [showScore, setShowScore] = useState(false)
  const scores = rating.scores
  const averageScore = rating.scores.reduce((a, b) => a + b, 0)/scores.length;

  const handleScore = (e) => {
    e.preventDefault()
    setShowScore(!showScore)
  }

  return (
    <div className="rating-card" onClick={handleScore}>
      <div>{rating.name} ({rating.distance}m away) {rating.address}</div>
      {rating.scores.length>1 ? 
        <div>{showScore ? rating.scores.map(score => <div>{score}</div>) : averageScore}<button onClick={handleScore}>click</button></div> 
        : <div>{rating.scores[0]}</div>}
      
    </div>
  )
}

RatingCard.propTypes = {

}

export default RatingCard

