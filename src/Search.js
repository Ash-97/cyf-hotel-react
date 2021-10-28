import React, { useState } from "react";
import SearchButton from "./Components/SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    return props.search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-center">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                value={searchInput}
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
