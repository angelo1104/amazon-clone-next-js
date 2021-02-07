import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import Header from "../Header/Header";
import { GlassMagnifier } from "react-image-magnifiers";
import { useRouter } from "next/router";
import { useStateValue } from "../../ContextApi/StateProvider";
import {
  addProduct,
  removeProduct,
  updateTotalProduct,
} from "../../ContextApi/actions";
import { Button, Grid } from "@material-ui/core";
import Footer from "../Footer/Footer";
import ImagePLaceHolder from "../ImagePlaceHolder/ImagePLaceHolder";

function Product({
  _id,
  name,
  images,
  description,
  features,
  price,
  brand,
  avatar,
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  const [productInCart, setProductInCart] = useState({});

  const filterValue = (array, key, value) =>
    array.filter((item) => item[key] === value);

  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    console.log("Cartey", cart);

    const gotItem = filterValue(cart, "_id", _id);

    if (gotItem.length) setProductInCart(gotItem[0]);
    else setProductInCart({});
  }, [cart]);

  const pushToCart = () => {
    const product = {
      _id,
      name,
      price,
      brand,
      avatar,
      amount: 1,
    };

    if (!cart.length) {
      dispatch(addProduct(product));
    } else {
      let found = false;

      cart.forEach((item, index) => {
        if (item._id === _id) {
          const updatedProduct = { ...product, amount: item.amount + 1 };

          dispatch(updateTotalProduct(updatedProduct));

          found = true;
        }
      });

      if (!found) {
        dispatch(addProduct(product));
      }
    }
  };

  const removeFromCart = (event) => {
    dispatch(removeProduct(productInCart));
  };

  const goToCart = () => {
    router.push("/cart");
  };

  const isEmptyObject = (obj) => {
    for (let key in obj) return true;
    return false;
  };

  const buyNow = (event) => {
    event.preventDefault();
    if (isEmptyObject(productInCart)) {
      goToCart();
    } else {
      pushToCart();
      goToCart();
    }
  };

  return (
    <div>
      <Header />

      <div className={styles.product_main}>
        <Grid container={true} spacing={1} className={styles.product_info}>
          <Grid item xs={1} className={styles.avatars}>
            <div className={styles.small_images}>
              {images.map((image, index) => {
                const style = {
                  boxShadow:
                    index === selectedImage
                      ? "0 0 3px 2px rgba(228,121,17, .7)"
                      : "none",
                  width: "fit-content",
                  height: "fit-content",
                };

                return (
                  <div
                    style={style}
                    onMouseOver={(event) => {
                      setSelectedImage(index);
                    }}
                    key={index}
                  >
                    <ImagePLaceHolder
                      className={styles.small_image}
                      src={image}
                      style={style}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </Grid>

          <Grid item={true} xs={4} className={styles.display_image}>
            <GlassMagnifier
              imageSrc={images[selectedImage]}
              imageAlt={"product image"}
              magnifierBorderSize={0}
            />
          </Grid>

          <Grid item={true} xs={7} className={styles.product_text}>
            <h2 className={styles.product_title}>{name}</h2>

            <p className={styles.product_price}>
              {brand}
              <span className={styles.pricey_span}>
                ${parseInt(price)}{" "}
                <span className={styles.super_cents}>
                  {(price + "").split(".")[1]}
                </span>
              </span>
            </p>

            <hr className={styles.product_separator} />

            <pre className={styles.product_desc}>{description}</pre>

            <ul className={styles.product_list}>
              {features.map((feature, index) => {
                return (
                  <li className={styles.product_list_item} key={index}>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </Grid>
        </Grid>

        <div className={styles.product_buy}>
          <div className={styles.buy_now}>
            <button className={styles.buy_now_button} onClick={buyNow}>
              Buy Now
            </button>

            {!productInCart.amount && (
              <button
                className={styles.buy_now_button}
                onClick={(event) => pushToCart()}
              >
                Add to cart
              </button>
            )}

            {productInCart?.amount && (
              <div className={styles.add_remove}>
                <Button className={styles.add_button} onClick={pushToCart}>
                  +
                </Button>
                <span>{productInCart.amount}</span>
                <Button
                  className={styles.remove_button}
                  onClick={removeFromCart}
                >
                  -
                </Button>
              </div>
            )}

            <hr className={styles.product_separator_buttons} />

            <p className={styles.one_to_sell}>Have one to sell?</p>

            <button
              className={styles.sell_now_button}
              onClick={(event) => router.push("/seller/products")}
            >
              Sell on Amazon
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
