import React, { useState } from "react";
import PropTypes from "prop-types";
import {getDishes} from "../../../controllers/backendControllers"

function Search({ setSearchResults }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dishes = await getDishes()
    setSearchResults(dishes.dishes.filter(e=>e.name.includes(search)))  
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={handleSearchInput}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
    </>
  );
}
Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;