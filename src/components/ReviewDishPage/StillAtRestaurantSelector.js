
const StillAtRestaurantSelector = ({ renderComponent, atRestaurantNowHandler, notAtRestaurantNowHandler }) => {
  if (renderComponent) {

    return (
      <div 
        className="form-field"
        id="StillAtRestaurantSelector"
      >
        <p className="ReviewDishPage-text">
          Are you at the restaurant?
        </p>

        <div 
          id="stillAtRestaurantButtonsContainer"
        >
          <button 
            className="form-button stillAtRestaurantButton"
            onClick={atRestaurantNowHandler}
          >
            Yes
          </button>
          
          <button 
            className="form-button stillAtRestaurantButton"
            onClick={notAtRestaurantNowHandler}
          >
            No
          </button>
        </div>
      </div>
    )
  } else { 
    return null 
  };
};

export default StillAtRestaurantSelector;