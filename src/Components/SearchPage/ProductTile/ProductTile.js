import React from "react";
import styles from "./ProductTile.module.css";
import Link from "next/link";
import ImagePLaceHolder from "../../ImagePlaceHolder/ImagePLaceHolder";

function ProductTile({ title, imageUrl, price, brand, id }) {
  return (
    <Link href={`/product?q=${id}`}>
      <a className={styles.product_with_divider}>
        <div className={styles.product}>
          <ImagePLaceHolder className={styles.product_img} src={imageUrl} />

          <div className={styles.product_details}>
            <h3 className={styles.product_title}>{title}</h3>

            <div className={styles.brandy}>
              <p className={styles.product_price}>
                ${parseInt(price)}{" "}
                <span className={styles.super_cents}>
                  {(price + "").split(".")[1]}
                </span>
              </p>

              <p className={styles.product_price}>{brand}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductTile;

export async function getServerSideProps({ query }) {}
