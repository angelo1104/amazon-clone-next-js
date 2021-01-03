import React, { useState } from "react";
import styles from "./DashBoardCreateProductLegals.module.css";
import { useProductValue } from "../../../../../../ContextApi/ProductProvider";
import {
  setFormPrice,
  setFormProcessing,
  setFormSearchTerm,
} from "../../../../../../ContextApi/productsActions";
import productInstance from "../../../../../../axios/productInstance";
import { useStateValue } from "../../../../../../ContextApi/StateProvider";
import { storage } from "../../../../../../firebase";
import animation from "../../../../../../lottie/loader-product.json";
import Lottie from "lottie-react-web";
import {useRouter} from "next/router";

//I love Ishika. Please love me.

function DashBoardCreateProductLegals({ setPage, page }) {
  const [clickable, setClickable] = useState(false)
  const [
    {
      name,
      price,
      searchTerm,
      brand,
      pickupAddress,
      shortDescription,
      description,
      avatar,
      images,
      features,
      processing,
    },
    dispatch,
  ] = useProductValue();

  const setProcessing = (state) => {
    dispatch(setFormProcessing(state));
  };

  const [{ dataUser }] = useStateValue();

  const router = useRouter()

  const submit = async (event) => {
    event.preventDefault();

    try {
      console.log("clicked.");
      setProcessing(true);
      await storage()
        .ref(`products/${dataUser.name}/${name}/avatar`)
        .put(avatar[0]);

      const avatarUrl = await storage()
        .ref(`products/${dataUser.name}/${name}/avatar`)
        .getDownloadURL();

      const imageUrls = [];

      for (const image of images) {
        const index = images.indexOf(image);

        await storage()
          .ref(`products/${dataUser.name}/${name}/${image.name}${index}`)
          .put(image);

        const url = await storage()
          .ref(`products/${dataUser.name}/${name}/${image.name}${index}`)
          .getDownloadURL();

        imageUrls.push(url);
      }

      console.log(avatarUrl, imageUrls);

      const product = await productInstance.post("/create", {
        product: {
          name,
          brand,
          pickupAddress,
          shortDescription,
          description,
          avatar: avatarUrl,
          images: imageUrls,
          price: price.toString(),
          searchTerm,
          features: features.filter((feature, index) => {
            if (feature || feature.trim()) {
              // feature is no empty
              return feature;
            }
          }),
          ownerEmail: dataUser.email,
          ownerUid: dataUser.uid,
          status: "LIVE",
        },
      });

      console.log("Submitted", product);

      router.push('/seller/products/dashboard')
      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      console.log(error);
    }
  };

  const moveBack = (event) => {
    event.preventDefault();

    setPage(page - 1);
  };

  return (
    <div className={styles.legals}>
      <img
        className={styles.logo}
        src={
          "https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2018/04/10095553/Amazon-seller-central.png"
        }
        alt=""
      />

      <form className={styles.legals_form}>
        <h2 className={styles.title}>Additional Info?</h2>

        <div className={styles.input_div}>
          <p className={styles.label}>Prices in USD</p>
          <input
            className={styles.input}
            type="number"
            disabled={processing}
            value={price}
            onChange={(event) => {
              const priceValue = parseFloat(event.target.value);
              if (priceValue <= 99999999.99) dispatch(setFormPrice(priceValue));
            }}
          />
        </div>

        <div className={styles.input_div}>
          <p className={styles.label}>Search Term</p>
          <input
            className={styles.input}
            disabled={processing}
            type="text"
            value={searchTerm}
            onChange={(event) =>
              dispatch(setFormSearchTerm(event.target.value.substr(0, 128)))
            }
          />
        </div>

        <p className={styles.label_terms}>
          By creating an product on Amazon's seller central you acknowledge our
          terms and conditions. In order to get paid you should have your stripe
          account connected with us.
        </p>

        <div className={styles.step_buttons_div}>
          <button
            className={styles.step_button}
            onClick={moveBack}
            disabled={processing}
          >
            <span className={styles.step_button_arrow}>{"<"}</span> Prev
          </button>

          <button
            className={styles.step_button}
            onClick={submit}
            disabled={processing}
          >
            {processing && (
              <div className={styles.lottie}>
                <Lottie options={{ animationData: animation }} />
              </div>
            )}
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default DashBoardCreateProductLegals;
