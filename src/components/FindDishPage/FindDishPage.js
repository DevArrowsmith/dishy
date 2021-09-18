import React, {useState} from "react";
import "../../styles/FindDishPage.css";
import distance from "../utils/geoLocation";
import Search from "../FindDishPage/Search/Search"
import SearchResults from "../FindDishPage/Search/SearchResults"

const FindDishPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)

  /* const [coordinates,setCoordinates] = useState({longitude:0,latitude:0})

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        setCoordinates({longitude: position.coords.longitude, latitude:position.coords.latitude})
        console.log(distance(coordinates.longitude, coordinates.latitude, -2.27240371365973, 53.45083035825205))
      });      
    } else {
      // handle coordinates being refused
    }
  } */


  return (
    <>
      <p id="demo"> This is a placeholder for the Find a Dish page.</p>
      <Search setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults} />
    </>
  );
};
export default FindDishPage;
