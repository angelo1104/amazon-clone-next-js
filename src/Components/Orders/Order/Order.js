import React, { useEffect } from "react";
import styles from "./Order.module.css";
import CartProduct from "../../Cart/CartProduct/CartProduct";
import { formatDistanceToNow } from "date-fns";

function Order({ order }) {
  const { products, date, status } = order;

  return (
    <div className={styles.order}>
      <div className={styles.info}>
        <h2 className={styles.status}>
          {status}{" "}
          <span className={styles.date}>
            Ordered {formatDistanceToNow(new Date(date))} ago
          </span>
        </h2>
        <p className={styles.total}>Total amount: 2000$</p>
      </div>

      {products.map((product, index) => (
        <CartProduct
          key={index}
          display={true}
          avatar={product.avatar}
          name={product.name}
          price={product.price}
          _id={product._id}
          amount={product.amount}
          brand={product.brand}
        />
      ))}
    </div>
  );
}

export default Order;
