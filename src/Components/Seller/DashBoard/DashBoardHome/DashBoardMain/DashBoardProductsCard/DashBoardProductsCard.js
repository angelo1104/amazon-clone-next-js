import React from "react";
import styles from "./DashBoardProductsCard.module.css";
import ImagePLaceHolder from "../../../../../ImagePlaceHolder/ImagePLaceHolder";

function DashBoardProductsCard({ image, name, price, description }) {
  const truncateString = (string, maxLength = 50) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <ImagePLaceHolder className={styles.image} src={image} />

        <h4 className={styles.name}>{truncateString(name, 30)}</h4>
      </div>

      <div className={styles.info}>
        <div>
          <p className={styles.text}>
            Price on our stores {"  "}
            <span className={styles.price}>${price} USD</span>
          </p>

          <p className={styles.small_desc}>
            {truncateString(description, 150)}
          </p>
        </div>

        <div className={styles.right}>
          <button className={styles.button}>Edit the prod</button>
          <button className={styles.button}>Promote</button>
        </div>
      </div>
    </div>
  );
}

export default DashBoardProductsCard;
