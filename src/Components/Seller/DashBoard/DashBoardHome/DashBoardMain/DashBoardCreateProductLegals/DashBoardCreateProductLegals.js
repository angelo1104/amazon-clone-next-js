import React from "react";
import styles from "./DashBoardCreateProductLegals.module.css";
import { useProductValue } from "../../../../../../ContextApi/ProductProvider";
import {
  setFormPrice,
  setFormSearchTerm,
} from "../../../../../../ContextApi/productsActions";
import productInstance from "../../../../../../axios/productInstance";
import { useStateValue } from "../../../../../../ContextApi/StateProvider";
import { storage } from "../../../../../../firebase";

//I love Ishika. Please love me.

function DashBoardCreateProductLegals({ setPage, page }) {
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
      imagesUrls,
      features,
    },
    dispatch,
  ] = useProductValue();

  const [{ dataUser }, dispatchState] = useStateValue();

  const submit = async (event) => {
    event.preventDefault();

    try {
      console.log("clicked.");
      await storage()
        .ref(`products/${dataUser.name}/${name}/avatar`)
        .put(avatar[0]);

      const avatarUrl = await storage()
        .ref(`products/${dataUser.name}/${name}/avatar`)
        .getDownloadURL();

      let imageUrls = []; // <======== set this as a separate variable and remove it from the next line

      images.map((image, index) => {
        const imageUploadTask = storage()
          .ref(`products/${dataUser.name}/${name}/${image.name}${index}`)
          .put(image);

        imageUploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage()
              .ref(`products/${dataUser.name}/${name}/${image.name}${index}`)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                imageUrls.push(url); // <============= add this line here
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      });

      console.log(avatarUrl, imageUrls);
    } catch (error) {}

    // try {
    //   const product = await productInstance.post("/create", {
    //     product: {
    //       name,
    //       brand,
    //       pickupAddress,
    //       shortDescription,
    //       description,
    //       avatar: avatarUrl,
    //       images: imagesUrls,
    //       price,
    //       searchTerm,
    //       features: features.filter((feature, index) => {
    //         if (feature || feature.trim()) {
    //           // feature is no empty
    //           return feature;
    //         }
    //       }),
    //       ownerEmail: dataUser.email,
    //       ownerUid: dataUser.uid,
    //       status: "LIVE",
    //     },
    //   });
    //
    //   console.log("Submitted", product);
    // } catch (e) {
    //   console.log(e);
    // }
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
          <button className={styles.step_button} onClick={moveBack}>
            <span className={styles.step_button_arrow}>{"<"}</span> Prev
          </button>

          <button className={styles.step_button} onClick={submit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default DashBoardCreateProductLegals;
