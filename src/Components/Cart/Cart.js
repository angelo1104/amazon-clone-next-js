import React from "react";
import styles from "./Cart.module.css";
import Header from "../Header/Header";
import CartList from "./CartList/CartList";
import { useStateValue } from "../../ContextApi/StateProvider";
import { setCart } from "../../ContextApi/actions";
import { useRouter } from "next/router";

function Cart() {
  const [{ cart, user, dataUser }, dispatch] = useStateValue();
  const router = useRouter();

  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.amount * item.price;
  }, 0);

  const placeOrder = (event) => {
    event.preventDefault();

    if (!user || !dataUser) {
      //user is signed out.
      router.push("/auth/sign-up");
    } else {
      //place order.
      router.push("/cart/placeOrder");
    }
  };

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

        {!cart.length && (
          <div
            className={styles.cart_right}
            style={{
              zIndex: "100",
              background: "white",
              position: "absolute",
              width: "100%",
            }}
          ></div>
        )}

        {cart.length && (
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

            <button className={styles.place_order} onClick={placeOrder}>
              Place order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
