import React from "react";
import "../../styles/HomePage.css";

const HomePage = () => {
  return (
    <>

      <div className="HomePage-header">
        <p>Dishy! (header image goes here)</p>
        <p>Welcome to your new favourite food!</p>
      </div>

      <div className="HomePage-buttonsContainer">
        <button 
          className="HomePage-button"
          id="HomePage-button-find"
          type="button"
        >
          Find a Dish
        </button>

        <button
          className="HomePage-button"
          id="HomePage-button-review"
          type="button"
        >
          Rate a Dish
        </button>

      </div>
    </>
  );
};

export default HomePage;