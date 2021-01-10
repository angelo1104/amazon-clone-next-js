import React from "react";
import styles from "./ImageLens.module.css";

function ImageLens({ position, isActive, isPositionOutside }) {
  return (
    <div
      className={styles.lens}
      style={{
        left: position.x,
        top: position.y,
        display: (!isActive && "none") || (isPositionOutside && "none"),
      }}
    >
      Lensy
    </div>
  );
}

export default ImageLens;
