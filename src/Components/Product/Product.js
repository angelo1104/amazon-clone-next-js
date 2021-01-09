import React from "react";
import styles from "./Product.module.css";
import Header from "../Header/Header";

function Product({ _id, name, images, description, features }) {
  return (
    <div>
      <Header />

      <div className={styles.product_main}>
        <div className={styles.product_info}>
          <div className={styles.product_images}>
            <img className={styles.product_image} src={images[0]} alt="" />
          </div>

          <div className={styles.product_description}>
            <h2 className={styles.product_title}>{name}</h2>

            <hr className={styles.product_separator} />

            <p className={styles.product_desc}>{description}</p>

            <ul className={styles.product_list}>
              {features.map((feature, index) => {
                return (
                  <li className={styles.product_list_item} key={index}>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.product_buy}>
          <div className={styles.buy_now}>
            <button className={styles.buy_now_button}>Buy Now</button>

            <button className={styles.buy_now_button}>Add to cart</button>

            <hr className={styles.product_separator_buttons} />

            <p className={styles.one_to_sell}>Have one to sell?</p>

            <button className={styles.sell_now_button}>Sell on Amazon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
