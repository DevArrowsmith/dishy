import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import distance from "../../utils/geoLocation";
import RatingCard from "./RatingCard"

function DishRatings({ filteredRatings, coordinates }) {
  const [dishRatings, setDishRatings] = useState([])

  useEffect(()=>{
    let tempMap = new Map()
    let coords = []

    filteredRatings.forEach(rating => {
      const restaurantName = rating.Restaurant.name
      const restaurantAddress = rating.Restaurant.address
      if(!tempMap.get(restaurantName)){
        tempMap.set(restaurantName, [rating.rating])
        const distanceFromUser = distance(coordinates.latitude,coordinates.longitude,rating.Restaurant.latitude,rating.Restaurant.longitude)
        coords = [...coords,Math.round(Number(distanceFromUser))]
      }else{
        tempMap.set(restaurantName,([...tempMap.get(restaurantName),rating.rating]))
      }
    })

    let restaurantArray = []
    const restaurantNames = [...tempMap.keys()]
    restaurantNames.forEach((name,i)=> {
      let restaurantObj ={
        name: name,
        distance: coords[i],
        scores: [...tempMap.values()][i],
      }
      restaurantArray.push(restaurantObj)
    })

    setDishRatings(restaurantArray)
    
  },[filteredRatings])

  
  return (
    <>
      {dishRatings.map(rating=>(
      <div key={rating.name}><RatingCard rating={rating}/></div>
      ))}
    </>
  )
}

DishRatings.propTypes = {

}

export default DishRatings

