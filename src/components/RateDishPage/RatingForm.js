const RatingForm = ({ restaurantsList, foodsList }) => {
  if (restaurantsList.length > 0) {
    console.log(restaurantsList);
    return (
      <>
        <p>Choose your restaurant:</p>
        <select>
          {restaurantsList.map(restaurant => <option value={restaurant.name}>{restaurant.name}</option>)};
        </select>
        <p>What did you eat?</p>
        <select>
          {foodsList.map(food => <option value={food}>{food}</option>)}
        </select>
        <p>How was it?</p>
      </>
    )
  } else {
    return null;
  };
};

export default RatingForm;