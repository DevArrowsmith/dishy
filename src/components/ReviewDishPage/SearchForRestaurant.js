
const SearchForRestaurant = ({ renderComponent, handleLocationChange, handleGetRestaurants, location }) => {
  if (renderComponent) {
    return (
      <div className="form-field">
        <label htmlFor="set-location">
          Enter the restaurant's address:
          <input
            id="set-location"
            className="form-input"
            name="set-location"
            placeholder="7 Main Street, Manchester"
            onChange={handleLocationChange}
            value={location}
          />
        </label>
        <button 
          id="find-restaurant-submit-button"
          className="form-button"
          type="submit" onClick={handleGetRestaurants}>
            Search
        </button>
      </div>  
    );
  } else {
    return null
  };
};

export default SearchForRestaurant;