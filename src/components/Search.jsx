import React from 'react';

function Search({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search for a country..."
      className="search-bar"
    />
  );
}

export default Search;