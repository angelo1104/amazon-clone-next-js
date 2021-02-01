import React, { useEffect, useRef, useState } from "react";
import styles from "./ImagePlaceHolder.module.css";
import { Skeleton } from "@material-ui/lab";
import Image from "next/image";
import { nanoid } from "nanoid";

function ImagePLaceHolder({ className, src, setBounding }) {
  const [loaded, setLoaded] = useState(false);
  const imageId = nanoid(30);

  const setBound = (bound) => {
    try {
      setBounding(bound);
    } catch (e) {}
  };

  useEffect(() => {
    try {
      const image = document.querySelector(`#${imageId}`);
      image.addEventListener("load", (evt) => {
        setLoaded(true);
      });

      setBound(image.getBoundingClientRect());
    } catch (error) {}
  }, [imageId]);

  return (
    <div className={`${className} ${styles.container}`}>
      <Image
        src={src}
        alt={""}
        className={styles.image_tag}
        style={{ opacity: loaded ? "1" : "0" }}
        layout={"fill"}
        id={imageId.toString()}
      />

      {!loaded && (
        <Skeleton
          className={styles.skeleton}
          variant={"rect"}
          animation={"wave"}
        />
      )}
    </div>
  );
}

export default ImagePLaceHolder;
