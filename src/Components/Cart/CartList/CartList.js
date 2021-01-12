import React from "react";
import styles from "./CartList.module.css";
import CartProduct from "../CartProduct/CartProduct";
import { useStateValue } from "../../../ContextApi/StateProvider";

function CartList() {
  const [{ cart }] = useStateValue();

  return (
    <div className={styles.cart_list}>
      {cart.map((item, index) => (
        <CartProduct key={index} {...item} />
      ))}

      {!cart.length && <h2 className={styles.nothing}>Nothing in the cart.</h2>}
    </div>
  );
}

export default CartList;
