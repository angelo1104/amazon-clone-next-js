import React, { useEffect, useState } from "react";
import styles from "./DashBoardCreateProductImages.module.css";
import ImageTile from "./ImageTile/ImageTile";
import ImageTag from "./ImageTag/ImageTag";
import { useProductValue } from "../../../../../../ContextApi/ProductProvider";
import {
  setFormAvatar,
  setFormAvatarUrl,
  setFormImages,
  setFormImagesUrl,
} from "../../../../../../ContextApi/productsActions";

function DashBoardCreateProductImages({ setPage, page }) {
  const [
    { avatar, avatarUrl, images, imagesUrls },
    dispatch,
  ] = useProductValue();

  const [error, setError] = useState("");

  const setImages = (image) => {
    dispatch(setFormImages(image));
  };

  const setImagesUrls = (imageUrls) => {
    dispatch(setFormImagesUrl(imageUrls));
  };

  const setAvatar = (image) => {
    dispatch(setFormAvatar(image));
  };

  const setAvatarUrl = (image) => {
    dispatch(setFormAvatarUrl(image));
  };

  useEffect(() => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(avatar[0]);
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
      };
    } catch (error) {
      console.log(error);
    }
  }, [avatar]);

  const updateImages = (file) => {
    const imagesClone = [...images];
    if (imagesClone.length < 8) imagesClone.push(file);
    setImages(imagesClone);
  };

  const updateImageUrls = (url) => {
    const urlsClone = [...imagesUrls];
    if (urlsClone.length < 8) urlsClone.push(url);
    setImagesUrls(urlsClone);
  };

  const removeImageUrl = (index) => {
    setImagesUrls(
      [...imagesUrls].filter((url, indexed) => {
        if (index !== indexed) return url;
      })
    );
  };

  const moveBack = (event) => {
    event.preventDefault();

    setPage(page - 1);
  };

  const moveAhead = (event) => {
    event.preventDefault();

    if (!avatar.length) setError("Avatar is required.");
    else if (!images.length) setError("At least 1 Image is required.");
    else setPage(page + 1);
  };

  return (
    <div className={styles.create_images}>
      <img
        className={styles.amazon_logo}
        src={
          "https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2018/04/10095553/Amazon-seller-central.png"
        }
        alt=""
      />

      <form className={styles.create_images_form}>
        <h2 className={styles.create_images_title}>Upload Assets.</h2>

        <div className={styles.images_div}>
          <p className={styles.images_div_desc}>
            Avatar of product(a.ka thumbnail, recommended size: width- 1800px,
            height- 1100px)
          </p>
          <ImageTile
            index={0}
            title={"Avatar"}
            add={true}
            stylesImp={{ width: "180px", height: "110px" }}
            imageUrl={avatarUrl}
            setImages={setAvatar}
            setImageUrl={setAvatarUrl}
          />
        </div>

        <div className={styles.images_many_div}>
          <p className={styles.images_div_desc}>
            Images for products(minimum two images, recommended size: width-
            1000px, height- 1800px. Max 8)
          </p>
          <div className={styles.images_list}>
            {imagesUrls?.map((url, index) => {
              return (
                <ImageTag
                  key={index}
                  backgroundUrl={url}
                  index={index}
                  removeUrl={removeImageUrl}
                />
              );
            })}

            <ImageTile
              title={"Add"}
              add={false}
              stylesImp={{ width: "125px", height: "150px" }}
              index={0}
              setImages={updateImages}
              imageUrl={imagesUrls[3]}
              setImageUrl={updateImageUrls}
            />
          </div>
        </div>

        <p className={styles.error}>{error}</p>
        <div className={styles.step_buttons_div}>
          <button className={styles.step_button} onClick={moveBack}>
            <span className={styles.step_button_arrow}>{"<"}</span> Prev
          </button>

          <button className={styles.step_button} onClick={moveAhead}>
            Next <span className={styles.step_button_arrow}>{">"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default DashBoardCreateProductImages;
