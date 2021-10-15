import React, { useState } from "react";
import moment from "moment";

const SearchResultsTable = props => {
  const [selectedRow, setSelectedRow] = useState("");
  function highlightSelectedRow(passedKey) {
    setSelectedRow(passedKey === selectedRow ? "" : passedKey);
  }
  // const highlightRow = (e) => {
  //   if (e.target.parentElement.className === "") {
  //     e.target.parentElement.className = "highlightRowBlue";
  //   } else {
  //     e.target.parentElement.className = "";
  //   }
  // };
  return props.customerDetails.map((customer, index) => {
    const arrival = moment(customer.checkInDate);
    const departure = moment(customer.checkOutDate);
    return (
      <tr
        key={index}
        className={selectedRow === index ? "highlightRowBlue" : ""}
        onClick={() => highlightSelectedRow(index)}
      >
        <td>{customer.id}</td>
        <td>{customer.title}</td>
        <td>{customer.firstName}</td>
        <td>{customer.surname}</td>
        <td>{customer.email}</td>
        <td>{customer.roomId}</td>
        <td>{customer.checkInDate}</td>
        <td>{customer.checkOutDate}</td>
        <td>{departure.diff(arrival, "days")}</td>
        {/* <td>{moment.duration(departure.diff(arrival)).asDays()}</td> */}
      </tr>
    );
  });
};

export default SearchResultsTable;
