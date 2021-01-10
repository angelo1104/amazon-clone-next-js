import React, { useState } from "react";
import styles from "./Product.module.css";
import Header from "../Header/Header";
import ReactImageMagnify from "react-image-magnify";
import ImageLens from "./ImageLens/ImageLens";

function Product({ _id, name, images, description, features }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <Header />

      <div className={styles.product_main}>
        <div className={styles.product_info}>
          <div className={styles.product_images}>
            <div className={styles.small_images}>
              {images.map((image, index) => {
                const style = {
                  boxShadow:
                    index === selectedImage
                      ? "0 0 3px 2px rgba(228,121,17, .7)"
                      : "none",
                };

                return (
                  <img
                    className={styles.small_image}
                    src={image}
                    style={style}
                    alt=""
                    key={index}
                    onMouseOver={(event) => {
                      setSelectedImage(index);
                    }}
                  />
                );
              })}
            </div>

            <div className={styles.main_image}>
              <ReactImageMagnify
                smallImage={{
                  isFluidWidth: true,
                  src: images[selectedImage],
                }}
                imageClassName={styles.main_image_src}
                largeImage={{
                  src: images[selectedImage],
                  width: 667,
                  height: 800,
                }}
                enlargedImageContainerClassName={styles.main_image_large}
                enlargedImageContainerDimensions={{
                  width: "125%",
                  height: "140%",
                }}
                lensComponent={ImageLens}
              />
            </div>
          </div>

          <div className={styles.product_description}>
            <h2 className={styles.product_title}>{name}</h2>

            <hr className={styles.product_separator} />

            <p className={styles.product_desc}>{description}</p>

            <ul className={styles.product_list}>
              {features.map((feature, index) => {
                return (
                  <li className={styles.product_list_item} key={index}>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.product_buy}>
          <div className={styles.buy_now}>
            <button className={styles.buy_now_button}>Buy Now</button>

            <button className={styles.buy_now_button}>Add to cart</button>

            <hr className={styles.product_separator_buttons} />

            <p className={styles.one_to_sell}>Have one to sell?</p>

            <button className={styles.sell_now_button}>Sell on Amazon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
