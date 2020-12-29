import React, { useEffect, useRef, useState } from "react";
import styles from "./ImageTile.module.css";

function ImageTile({
  title,
  add,
  stylesImp,
  imageUrl,
  setImages,
  setImageUrl,
  index,
}) {
  const imageRef = useRef(null);
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  const showDialog = (event) => {
    inputRef.current.click();
  };

  function getFile(filePath) {
    return (
      filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length) ||
      filePath
    );
  }

  const handleFiles = (event) => {
    const files = event.target.files;
    if (!add) {
      Object.size = function (obj) {
        let size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };
      console.log("add", Object.size(files));

      for (let i = 0; i < Object.size(files); i++) {
        const fileType = getFile(files[i].name);
        if (fileType === "jpg" || fileType === "png") {
          setError("");
          //to-do
          setImages(files[i]);

          const reader = new FileReader();
          reader.readAsDataURL(files[i]);

          reader.onloadend = () => {
            setImageUrl(reader.result);
          };
        } else {
          console.log("error");
          setError("only images with .jpg and .png extension are allowed.");
        }
      }
    } else {
      if (files[0]) {
        const fileType = getFile(files[0].name);
        if (fileType === "jpg" || fileType === "png") {
          setError("");
          setImages([files[0]], index);
        } else {
          console.log("error");
          setError("only images with .jpg and .png extension are allowed.");
        }
      }
    }
  };

  const imageTileStyles =
    !imageUrl || !add
      ? {}
      : {
          background: `url('${imageUrl}')`,
          border: "none",
          boxShadow: "2px 3px 13px -3px rgba(0,0,0,0.75)",
          borderRadius: "4px",
        };

  const spanStyles = {
    display: !imageUrl || !add ? "block" : "none",
  };

  return (
    <div className={styles.container}>
      <p className={styles.error}>{error}</p>
      <div
        style={{ ...imageTileStyles, ...stylesImp }}
        onClick={showDialog}
        ref={imageRef}
        className={styles.image_tile}
      >
        <input
          onChange={handleFiles}
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          name=""
          id=""
        />
        <span className={styles.image_title} style={spanStyles}>
          {title}
        </span>
      </div>
    </div>
  );
}

export default ImageTile;
