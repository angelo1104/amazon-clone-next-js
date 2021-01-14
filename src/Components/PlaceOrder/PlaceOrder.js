import React from "react";
import styles from "./PLaceOrder.module.css";
import Header from "../Header/Header";
import Checkout from "./Checkout/Checkout";
import Footer from "../Footer/Footer";

function PlaceOrder() {
  return (
    <div>
      <Header />

      <img
        className={styles.banner_wood}
        src={
          "https://images.all-free-download.com/images/graphicthumb/wood_background_hd_picture_4_169843.jpg"
        }
        alt=""
      />

      <div className={styles.checkout_main}>
        <Checkout />
      </div>

      <Footer />
    </div>
  );
}

export default PlaceOrder;
