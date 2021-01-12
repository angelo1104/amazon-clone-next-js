import React from "react";
import styles from "./CartList.module.css";
import CartProduct from "../CartProduct/CartProduct";

function CartList() {
  return (
    <div className={styles.cart_list}>
      <CartProduct />
    </div>
  );
}

export default CartList;
