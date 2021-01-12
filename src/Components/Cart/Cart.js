import React from "react";
import styles from "./Cart.module.css";
import Header from "../Header/Header";
import CartList from "./CartList/CartList";

function Cart() {
  return (
    <div className={styles.cart}>
      <Header />

      <img
        className={styles.banner_wood}
        src={
          "https://images.all-free-download.com/images/graphicthumb/wood_background_hd_picture_4_169843.jpg"
        }
        alt=""
      />

      <div className={styles.cart_main}>
        <div className={styles.cart_left}>
          <CartList />
        </div>

        <div className={styles.cart_right}>jonita</div>
      </div>
    </div>
  );
}

export default Cart;
