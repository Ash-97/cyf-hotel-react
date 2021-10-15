import React from "react";
import Order from "./Components/Order";

const Restaurant = () => {
  return (
    <div className="Restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
