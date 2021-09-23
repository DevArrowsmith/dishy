import { useState } from 'react';
const StillAtRestaurantSelector = ({ renderComponent, atRestaurantNowHandler, notAtRestaurantNowHandler }) => {

  const initialState = {
    selectedButtons: {
      yesButton: false,
      noButton: false,
    }
  }

  const [selectedButtons, setSelectedButtons] = useState(initialState.selectedButtons);

  const yesOnClick = () => {
    setSelectedButtons({
      yesButton: true,
      noButton: false,
    });
    atRestaurantNowHandler();
  };

  const noOnClick = () => {
    setSelectedButtons({
      yeButton: false,
      noButton: true,
    });
    notAtRestaurantNowHandler();
  };

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
            onClick={() => !selectedButtons.yesButton && yesOnClick()}
          >
            Yes
          </button>
          
          <button 
            className="form-button stillAtRestaurantButton"
            onClick={() => !selectedButtons.noButton && noOnClick()}
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