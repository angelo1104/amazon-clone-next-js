import React, { useEffect, useState } from "react";
import styles from "./ImageZoom.module.css";
import ImageLens from "../ImageLens/ImageLens";
import ImagePLaceHolder from "../../ImagePlaceHolder/ImagePLaceHolder";
import ZoomedImage from "./ZoomedImage/ZoomedImage";

function ImageZoom({ smallImageSrc, largeImageSrc }) {
  const [locationX, setLocationX] = useState("");
  const [locationY, setLocationY] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isPositionOutSide, setIsPositionOutSide] = useState(true);
  const [bounding, setBounding] = useState({});
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.onmousemove = function (e) {
      setLocationX(`${e.clientX}`);
      setLocationY(`${e.clientY}`);
    };
  }, []);

  useEffect(() => {
    if (bounding && bounding !== {} && isActive) {
      //it is activated
      const x = +locationX - +bounding.left;
      const y = +locationY - +bounding.top;

      setRelativePosition({ x, y });
    }
  }, [bounding, locationX, locationY]);

  useEffect(() => {
    console.log("relative", relativePosition);
  }, [relativePosition]);

  return (
    <div
      className={styles.zoom}
      onMouseOver={() => {
        setIsActive(true);
        setIsPositionOutSide(false);
      }}
      onMouseOut={() => {
        setIsActive(false);
        setIsPositionOutSide(true);
      }}
    >
      <ImagePLaceHolder
        src={smallImageSrc}
        className={styles.small_image}
        setBounding={setBounding}
      />
      <ZoomedImage imageUrl={largeImageSrc} location={relativePosition} />
      <ImageLens
        position={{ x: locationX, y: locationY }}
        isActive={isActive}
        isPositionOutside={isPositionOutSide}
      />
    </div>
  );
}

export default ImageZoom;
