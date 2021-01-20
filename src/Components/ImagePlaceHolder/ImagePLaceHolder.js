import React, { useEffect, useState } from "react";
import styles from "./ImagePlaceHolder.module.css";
import { Skeleton } from "@material-ui/lab";
import Image from "next/image";

function ImagePLaceHolder({ style, className, width, height, src }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("loaded", loaded);
  }, [loaded]);

  return (
    <div className={`${className} ${styles.container}`}>
      <Image
        src={src}
        alt={""}
        className={styles.image_tag}
        onLoad={(e) => setLoaded(true)}
        style={{ opacity: loaded ? "1" : "0" }}
        layout={"fill"}
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
