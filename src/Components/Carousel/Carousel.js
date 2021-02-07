import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ data }) {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };
  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  const MINUTE_MS = 15000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Logs every minute");
  //     nextSlide();
  //   }, MINUTE_MS);
  //
  //   return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  // }, []);

  return (
    <div className={styles.carousel}>
      {/*<div className={styles.left_arrow} onClick={prevSlide}>*/}
      {/*  {"<"}*/}
      {/*</div>*/}

      {data.map((image, index) => (
        <div
          className={
            index === current
              ? `${styles.slide} ${styles.active}`
              : styles.slide
          }
          key={index}
        >
          {index === current && (
            <img key={index} src={image} alt="" className={styles.image} />
          )}
        </div>
      ))}

      <img src={data[0]} className={styles.hidden_image} />

      {/*<div className={styles.right_arrow} onClick={nextSlide}>*/}
      {/*  {">"}*/}
      {/*</div>*/}
    </div>
  );
}

export default Carousel;
