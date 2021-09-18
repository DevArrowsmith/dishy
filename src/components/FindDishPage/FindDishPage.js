import React, {useState} from "react";
import "../../styles/FindDishPage.css";
import distance from "../utils/geoLocation";

const FindDishPage = () => {
  const [coordinates,setCoordinates] = useState({longitude:0,latitude:0})

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        setCoordinates({longitude: position.coords.longitude, latitude:position.coords.latitude})
        console.log(distance(coordinates.longitude, coordinates.latitude, -2.27240371365973, 53.45083035825205))
      });      
    } else {
      // handle coordinates being refused
    }
  }
  return (
    <>
      <p id="demo"> This is a placeholder for the Find a Dish page.</p>
      {coordinates.latitude}
      {coordinates.longitude}
    </>
  );
};
export default FindDishPage;
