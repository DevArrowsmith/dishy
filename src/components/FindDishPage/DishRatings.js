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
        averageScore: [...tempMap.values()][i].reduce((a, b) => a + b, 0)/[...tempMap.values()][i].length
      }
      restaurantArray.push(restaurantObj)
    })
    setDishRatings(restaurantArray)
    
  },[filteredRatings])

  const sortByRating = (e) => {
    e.preventDefault()
    const tempR = [...dishRatings]
    tempR.sort((a,b) => (a.averageScore > b.averageScore) ? -1 : ((b.averageScore > a.averageScore) ? 1 : 0))
    setDishRatings(tempR)
  }

  console.log(filteredRatings)
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

