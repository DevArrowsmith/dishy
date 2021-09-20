import React, { useState } from 'react'
import PropTypes from 'prop-types'

function RatingCard({ rating }) {
  const [showScore, setShowScore] = useState(false)
  const scores = rating.scores
  const averageScore = Math.round(rating.averageScore * 10) / 10
  

  const handleScore = (e) => {
    e.preventDefault()
    setShowScore(!showScore)
  }

  return (
    <div className="rating-card" onClick={handleScore}>
      <div>{rating.name} ({rating.distance}m away) </div>
      {rating.scores.length>1 ? 
        <div>{showScore ? rating.scores.map(score => <div>{score}</div>) : averageScore}<button onClick={handleScore}>click</button></div> 
        : <div>{rating.scores[0]}</div>}
    </div>
  )
}

RatingCard.propTypes = {

}

export default RatingCard

