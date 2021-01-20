import React from "react";
import styles from "./CartProduct.module.css";
import { useStateValue } from "../../../ContextApi/StateProvider";
import { removeProduct, updateTotalProduct } from "../../../ContextApi/actions";
import Link from "next/link";
import ImagePLaceHolder from "../../ImagePlaceHolder/ImagePLaceHolder";

function CartProduct({ name, avatar, price, brand, _id, amount, display }) {
  const [{ cart }, dispatch] = useStateValue();

  const priceDisplay = price * amount;

  const addToCart = (event) => {
    event.preventDefault();

    const product = {
      _id,
      name,
      price,
      brand,
      avatar,
      amount: 1,
    };

    cart.forEach((item, index) => {
      if (item._id === _id) {
        const updatedProduct = { ...product, amount: item.amount + 1 };

        dispatch(updateTotalProduct(updatedProduct));
      }
    });
  };

  const removeFromCart = (event) => {
    dispatch(
      removeProduct({
        _id,
        name,
        price,
        brand,
        avatar,
        amount,
      })
    );
  };

  return (
    <div className={styles.cart_product_after}>
      <div className={styles.cart_product}>
        <ImagePLaceHolder src={avatar} className={styles.cart_image} />
        <div className={styles.product_info}>
          <Link href={`/product?q=${_id}`}>
            <a>
              <h3 className={styles.product_title}>{name}</h3>
            </a>
          </Link>

          <div className={styles.pricing}>
            <p className={styles.brand}>{brand}</p>
            <p className={styles.price}>
              ${parseInt(priceDisplay.toString())}{" "}
              <span className={styles.super_cents}>
                {(priceDisplay + "").split(".")[1]}
              </span>
            </p>
          </div>
        </div>

        <div className={styles.increment}>
          {!display && (
            <button className={styles.increase_amount} onClick={addToCart}>
              <i className={styles.arrow_up}></i>
            </button>
          )}

          <p className={styles.amount}>{amount}</p>

          {!display && (
            <button className={styles.increase_amount} onClick={removeFromCart}>
              <i className={styles.arrow_down}></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
