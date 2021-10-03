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
  const initialState = {
    availableDishes: [],
    coordinates: {
      longitude: 0,
      latitude: 0,
    },
    filteredRatings: [],
    selectedDish: "",
  };

  const [availableDishes, setAvailableDishes] = useState(
    initialState.availableDishes
  );
  const [coordinates, setCoordinates] = useState(initialState.coordinates);
  const [filteredRatings, setFilteredRatings] = useState(
    initialState.filteredRatings
  );

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

  const handleFilterByDish = async (e) => {
    e.preventDefault();
    const response = await getFilteredRating(e.target.value);
    setFilteredRatings(response.ratings);
  };

  return (
    <div className="FindDishPage">
      <h2 className="FindPage-header" id="FindPage-header">
        <img src={findHeaderImage} alt="Rate a Dish" />
      </h2>

      <DishSelector
        availableDishes={availableDishes}
        handleFilterByDish={handleFilterByDish}
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
