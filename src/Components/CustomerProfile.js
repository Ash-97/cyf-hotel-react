import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => setCustomerData(data));
  }, [props.id]);
  if (props.id) {
    return (
      <ul className="customerProfile">
        <li>Customer {props.id} Profile</li>
        <li>Email: {customerData.email}</li>
        <li>{customerData.vip ? "VIP" : null}</li>
        <li>Phone Number : {customerData.phoneNumber}</li>
      </ul>
    );
  } else return null;
};
export default CustomerProfile;
