import React from "react";
import styles from "./BuyProduct.module.css";
import { Rate } from "antd";

function BuyProduct({ title, image, onClick }) {
  return (
    <div className={styles.container}>
      <p className={styles.head}>{title}</p>
      <img src={image} alt={title} className={styles.image} />

      <Rate defaultValue={2} style={{ marginTop: "15px" }} />

      <button className={styles.button} onClick={onClick}>
        Buy now
      </button>
    </div>
  );
}

export default BuyProduct;
