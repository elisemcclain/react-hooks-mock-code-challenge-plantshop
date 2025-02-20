import React, { useState } from "react";

function Search({ handleArray }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleArray(e.target.value)}
      />
    </div>
  );
}

export default Search;
