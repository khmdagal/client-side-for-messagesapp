import React from "react";

function SearchBar() {

    const handleSearch = e => {
        const value = e.target.value
        console.log(value)
    }

    return (
        <div className="container">
            <label>Search </label>
        <input
          onChange={handleSearch}
          id="searchBox"
          name="searchBox"
          type="text"
        />
      </div>
    );
}

export default SearchBar;
