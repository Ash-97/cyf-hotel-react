import React, { useState } from "react";
import SearchResultsTable from "./SearchResultsTable.js";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = props => {
  const [customerProfileId, setCustomerProfileId] = useState("");
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
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <SearchResultsTable
            customerDetails={props.results}
            setCustomerProfileId={setCustomerProfileId}
          />
        </tbody>
      </table>
      <div className="customerProfileContainer card">
        <CustomerProfile id={customerProfileId} />
      </div>
    </div>
  );
};

export default SearchResults;
