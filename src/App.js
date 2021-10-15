import React from "react";

import "./App.css";
import Bookings from "./Bookings";
import Footer from "./Components/Footer.js";
import Heading from "./Components/Heading.js";
import TouristInfoCards from "./Components/TouristInfoCards.js";
import Restaurant from "./Restaurant.js";
const hotelContactDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer contactDetails={hotelContactDetails} />
    </div>
  );
};

export default App;
