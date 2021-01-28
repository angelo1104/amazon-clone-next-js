import React, { useEffect } from "react";
import styles from "./Order.module.css";
import CartProduct from "../../Cart/CartProduct/CartProduct";
import { formatDistanceToNow } from "date-fns";

function Order({ order }) {
  const { products, date, status, totalPrice } = order;

  return (
    <div className={styles.order}>
      <div className={styles.info}>
        <h2 className={styles.status}>
          {status}{" "}
          <span className={styles.date}>
            Ordered {formatDistanceToNow(new Date(date))} ago
          </span>
        </h2>
        <p className={styles.total}>
          Total: {parseInt(totalPrice.toString())}$
          <span className={styles.super_cents}>
            {(totalPrice + "").split(".")[1]}
          </span>
        </p>
      </div>

      {products.map((product, index) => (
        <CartProduct
          key={index}
          display={true}
          avatar={product.avatar}
          name={product.name}
          price={product.price}
          _id={product.productID}
          amount={product.amount}
          brand={product.brand}
        />
      ))}
    </div>
  );
}

export default Order;
