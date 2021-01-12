import React from "react";
import styles from "./CartProduct.module.css";

function CartProduct() {
  return (
    <div className={styles.cart_product_after}>
      <a className={styles.cart_product}>
        <img
          className={styles.cart_image}
          src={"https://m.media-amazon.com/images/I/71BMVOs2xML._AC_UY218_.jpg"}
          alt=""
        />
        <div className={styles.product_info}>
          <h3 className={styles.product_title}>Macos SUr do your thing</h3>

          <div className={styles.pricing}>
            <p className={styles.brand}>Apple Inc.</p>
            <p className={styles.price}>900$</p>
          </div>
        </div>

        <div className={styles.increment}>
          <button className={styles.increase_amount}>
            <i className={styles.arrow_up}></i>
          </button>

          <p className={styles.amount}>20</p>

          <button className={styles.increase_amount}>
            <i className={styles.arrow_down}></i>
          </button>
        </div>
      </a>
    </div>
  );
}

export default CartProduct;
