import "../../styles/FindDishPage.css";
import React, {useState, useEffect} from "react";
import DishRatings from "./DishRatings";
import { getDishes, getFilteredRating } from "../../controllers/backendControllers";

const FindDishPage = () => {
  const [availableDishes, setAvailableDishes] = useState([]);
  const [coordinates,setCoordinates] = useState({longitude:0,latitude:0})
  const [filteredRatings, setFilteredRatings] = useState([])

  useEffect(()=>{
    async function fetchData(){
      let dishes = await getDishes();
      setAvailableDishes(dishes.dishes)   
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

  const handleFilter = async (e) =>{
    e.preventDefault(); 
    const response = await getFilteredRating(e.target.name)
    setFilteredRatings(response.ratings)
  }

  return (
    <>
      <div>
        Find Dish: {availableDishes.map(dish => (
          <button name={dish.name} onClick={handleFilter}>{dish.name}</button>
        ))}
      </div>
      <div >
        <DishRatings filteredRatings={filteredRatings} coordinates={coordinates}/>
      </div>   
    </>
  );
};
export default FindDishPage;