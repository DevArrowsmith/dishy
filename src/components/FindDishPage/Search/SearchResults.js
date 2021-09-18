import "../../../styles/SearchResults.css"
import React from "react";
import PropTypes from "prop-types";


const SearchResults = ({ searchResults }) => {
  if (!searchResults.length) {
    return <p>No results</p>;
  }
  return (
    <div>
      <p>Search Results</p>
      <div className="search-results">
        {searchResults.map((result) => (
        <div className="search-results-card">
          <div>{result.id}</div>
          <div>{result.name}</div>
        </div>
        ))}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchResults;