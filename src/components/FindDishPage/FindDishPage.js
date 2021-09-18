import "../../styles/FindDishPage.css";
import React, {useState, useEffect} from "react";
import RatingCard from "./RatingCard";
import { getDishes, getRatings } from "../../controllers/backendControllers";

const FindDishPage = () => {
  const [availableDishes, setAvailableDishes] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [coordinates,setCoordinates] = useState({longitude:0,latitude:0})
  const [filter, setFilter] = useState("")
  const [showDishes, setShowDishes] = useState(false)
  

  useEffect(()=>{
    async function fetchData(){
      let dishes = await getDishes();
      let ratings = await getRatings();
      setAvailableDishes(dishes.dishes)
      setRatings(ratings.dishes.map(dishes => dishes))
    }

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          setCoordinates({longitude: position.coords.longitude, latitude:position.coords.latitude})          
        });      
      } else {
        // handle coordinates being refused
      }
    } 
    fetchData();
    getLocation()
  },[])

  const handleFilter = (e) =>{
    e.preventDefault();
    setFilter(e.target.name)
    setShowDishes(!showDishes)
  }


  return (
    <>
      <div>
        Find Dish: {availableDishes.map(dish => (
          <button name={dish.name} onClick={handleFilter}>{dish.name}</button>
        ))}
        </div> 
        {<div className="rating-card-column">
          {ratings.filter(rating => rating.Dish.name===filter).map(rating => (
            <div className="rating-card">
              <RatingCard rating={rating} coordinates={coordinates} filter={filter}/>
            </div>
          ))}
        </div>}      
    </>
  );
};
export default FindDishPage;