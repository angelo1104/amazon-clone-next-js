import React from "react";
import styles from "./ZoomedImage.module.css";
import ImagePLaceHolder from "../../../ImagePlaceHolder/ImagePLaceHolder";

function ZoomedImage({ imageUrl, location }) {
  return (
    <div
      className={styles.zoomed_image}
      style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: `${location.x}px ${location.y}px`,
      }}
    >
      {/*<ImagePLaceHolder src={imageUrl} className={styles.image} />*/}
    </div>
  );
}

export default ZoomedImage;
