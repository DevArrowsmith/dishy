import { useState } from "react";

const RatingForm = ({ restaurantsList, foodsList }) => {

  const initialState = {
    rating: 10
  }

  const [rating, setRating] = useState(initialState.rating);

  const handleRatingChange = (event) => {
    setRating(event.target.value)
  };


  if (restaurantsList.length > 0) {
    console.log(restaurantsList);
    return (
      <>
        <p>Choose your restaurant:</p>
        <select>
          {restaurantsList.map(restaurant => <option value={restaurant.name} key={restaurant.id}>{restaurant.name}</option>)};
        </select>
        <p>What did you eat?</p>
        <select>
          {foodsList.map(food => <option value={food} key={food}>{food}</option>)}
        </select>
        <p>Rate it!</p>
        <input 
          type="range"
          id="rating"
          name="rating"
          min="1"
          max="10"
          step="1"
          onChange={handleRatingChange}
        />
        <p>Your rating: {rating}</p>
      </>
    )
  } else {
    return null;
  };
};

export default RatingForm;