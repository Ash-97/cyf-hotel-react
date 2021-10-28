import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/SearchResults.js";
import CreateBookingsForm from "./Components/CreateBookingsForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => {
        if (res.status >= 200 || res.status <= 299) {
          return res.json();
        } else throw new Error(`An Error Occurred: ${res.status}`);
      })
      .then(data => {
        setBookings(data);
        setLoadingData(true);
      })
      .catch(error => console.log(error));
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchFilter = bookings.filter(element => {
      return (
        element.firstName.toLowerCase().includes(searchVal) ||
        element.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(searchFilter);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />{" "}
        {loadingData ? (
          <SearchResults results={bookings} />
        ) : (
          <span>Fetching Customer Data Please Wait.....</span>
        )}
      </div>
      <div className="CreateBookingsForm">
        <CreateBookingsForm setBooking={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;
