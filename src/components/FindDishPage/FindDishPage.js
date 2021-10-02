import "../../styles/FindDishPage.css";
import React, { useState, useEffect } from "react";
import DishSelector from "./DishSelector";
import DishRatings from "./DishRatings";
import {
  getDishes,
  getFilteredRating,
} from "../../controllers/backendControllers";
import findHeaderImage from "../../assets/search-image-1.png";

const FindDishPage = () => {
  const [availableDishes, setAvailableDishes] = useState([]);
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });
  const [filteredRatings, setFilteredRatings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dishes = await getDishes();
      setAvailableDishes(dishes.dishes);
    }

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoordinates({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          });
        });
      } else {
        // handle coordinates being refused
      }
    }
    fetchData();
    getLocation();
  }, []);

  const handleFilter = async (e) => {
    e.preventDefault();
    const response = await getFilteredRating(e.target.name);
    setFilteredRatings(response.ratings);
  };

  return (
    <div className="FindDishPage">
      <h2 className="FindPage-header" id="FindPage-header">
        <img src={findHeaderImage} alt="Rate a Dish" />
      </h2>

      <DishSelector
        availableDishes={availableDishes}
        handleFilter={handleFilter}
      />

      <div>
        <DishRatings
          filteredRatings={filteredRatings}
          coordinates={coordinates}
        />
      </div>
    </div>
  );
};
export default FindDishPage;
