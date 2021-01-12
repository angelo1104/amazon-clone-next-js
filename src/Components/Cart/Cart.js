import React from "react";
import styles from "./Cart.module.css";
import Header from "../Header/Header";
import CartList from "./CartList/CartList";
import { useStateValue } from "../../ContextApi/StateProvider";
import { setCart } from "../../ContextApi/actions";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();

  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.amount * item.price;
  }, 0);

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

        <div className={styles.cart_right}>
          <p
            className={styles.clear_cart}
            onClick={(event) => {
              event.preventDefault();

              dispatch(setCart([]));
            }}
          >
            Clear Cart
          </p>

          <p className={styles.total}>
            Total: {parseInt(total.toString())}
            <span className={styles.super_cents}>
              {(total + "").split(".")[1]}
            </span>
          </p>

          <button className={styles.place_order}>Place order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
