import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import distance from "../../utils/geoLocation";
import RatingCard from "./RatingCard"

function DishRatings({ filteredRatings, coordinates }) {
  const [dishRatings, setDishRatings] = useState([])

  useEffect(()=>{
    let restaurantArray = []
    filteredRatings.forEach(rating => {
      rating = {
        ...rating,
        distance: Math.round(distance(coordinates.latitude,coordinates.longitude,rating.coordinates.latitude,rating.coordinates.longitude)),
        averageScore: rating.scores.reduce((a, b) => a + b, 0)/rating.scores.length
      }
      restaurantArray.push(rating)
    })      
    setDishRatings(restaurantArray)
    
  },[filteredRatings])

  const sortByRating = (e) => {
    e.preventDefault()
    const tempR = [...dishRatings]
    tempR.sort((a,b) => (a.averageScore > b.averageScore) ? -1 : ((b.averageScore > a.averageScore) ? 1 : 0))
    setDishRatings(tempR)
  }

  return (
    <>    
      {dishRatings.map(rating=>(
      <div key={rating.name}><RatingCard rating={rating}/></div>
      ))}
      <button onClick={sortByRating}>sort</button>
    </>
  )
}

DishRatings.propTypes = {

}

export default DishRatings

