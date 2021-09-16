const RatingForm = ({ restaurantsList }) => {
  if (restaurantsList.length > 0) {
    console.log(restaurantsList);
    return (
      <>
        <select>
          {restaurantsList.map(restaurant => <option value={restaurant.name}>{restaurant.name}</option>)};
        </select>
      </>
    )
  } else {
    return (<p>Please enter a location.</p>);
  };
};

export default RatingForm;