import React, { useEffect, useState } from "react";
import styles from "./Orders.module.css";
import Header from "../Header/Header";
import Order from "./Order/Order";

function Orders({ orders }) {
  useEffect(() => {
    console.log(orders);
  }, []);

  const [ordersList, setOrdersList] = useState();

  useEffect(() => {
    const ordersListUpdate = [];
    let i = 0;

    for (let order in orders) {
      ordersListUpdate.push(<Order key={i} order={order} />);
      i++;
    }

    setOrdersList(ordersListUpdate);
  }, [orders]);

  return (
    <div>
      <Header />

      {ordersList}
    </div>
  );
}

export default Orders;
