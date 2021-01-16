import React from "react";
import styles from "./Order.module.css";
import CartProduct from "../../Cart/CartProduct/CartProduct";

function Order({ order }) {
  return (
    <div className={styles.order}>
      {order.products.map((product, index) => {
        return <CartProduct key={index} {...product} />;
      })}
    </div>
  );
}

export default Order;
