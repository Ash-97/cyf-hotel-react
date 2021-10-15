import React from "react";
import SearchResultsTable from "./SearchResultsTable.js";

const SearchResults = props => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          <SearchResultsTable customerDetails={props.results} />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
