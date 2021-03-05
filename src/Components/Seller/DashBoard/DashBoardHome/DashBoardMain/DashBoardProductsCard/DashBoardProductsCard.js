import React from "react";
import styles from "./DashBoardProductsCard.module.css";
import ImagePLaceHolder from "../../../../../ImagePlaceHolder/ImagePLaceHolder";

function DashBoardProductsCard() {
  const truncateString = (string, maxLength = 50) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <ImagePLaceHolder
          className={styles.image}
          src={
            "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg"
          }
        />

        <h4 className={styles.name}>
          {truncateString("Hola Me sammo duerrrrrrrrrrrrrrrrr", 30)}
        </h4>
      </div>

      <div className={styles.info}>
        <div>
          <p className={styles.text}>
            Price on our stores {"  "}
            <span className={styles.price}>$8.29 USD</span>
          </p>

          <p className={styles.small_desc}>
            {truncateString(
              "Hola\n" +
                "            ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
              150
            )}
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
