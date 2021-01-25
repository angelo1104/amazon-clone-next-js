import React, { useEffect } from "react";
import Header from "../Header/Header";
import Order from "./Order/Order";
import Footer from "../Footer/Footer";

function Orders({ orders }) {
  useEffect(() => {
    console.log(orders);
  }, []);

  return (
    <div>
      <Header />

      {Object.values(orders).map((order, index) => {
        return <Order order={order} key={index} />;
      })}

      <Footer />
    </div>
  );
}

export default Orders;
