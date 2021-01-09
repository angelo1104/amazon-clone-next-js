import React from "react";
import styles from "./Product.module.css";
import Header from "../Header/Header";

function Product({ productID }) {
  return (
    <div>
      <Header />

      <div className={styles.product_main}>
        <div className={styles.product_info}>
          <div className={styles.product_images}></div>

          <div className={styles.product_description}></div>
        </div>

        <div className={styles.product_buy}></div>
      </div>
    </div>
  );
}

export default Product;
