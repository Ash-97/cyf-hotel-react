import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);
  const orderOne = () => {
    return setOrder(order + 1);
  };

  return (
    <li>
      {props.orderType}: {order} <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;
