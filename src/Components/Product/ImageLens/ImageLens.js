import React, { useEffect, useState } from "react";
import styles from "./ImageLens.module.css";

function ImageLens({ position, isActive, isPositionOutside }) {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  //
  // const addEventListeners = () => {
  //   document.addEventListener("mousemove", onMouseMove);
  // };
  //
  // const removeEventListeners = () => {
  //   document.removeEventListener("mousemove", onMouseMove);
  // };
  //
  // const onMouseMove = (e) => {
  //   setPosition({ x: e.clientX, y: e.clientY });
  // };
  //
  // useEffect(() => {
  //   addEventListeners();
  //   return () => removeEventListeners();
  // }, []);
  return (
    <div
      className={styles.lens}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        display: (!isActive && "none") || (isPositionOutside && "none"),
      }}
    >
      <p style={{ display: "none" }}>Lensy</p>
    </div>
  );
}

export default ImageLens;
