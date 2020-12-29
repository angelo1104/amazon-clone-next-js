import React from "react";
import styles from "./DashBoardCreateProduct.module.css";
import { useProductValue } from "../../../../../../ContextApi/ProductProvider";
import {
  setFormBrand,
  setFormDescription,
  setFormFeatures,
  setFormName,
  setFormPickupAddress,
  setFormShortDescription,
} from "../../../../../../ContextApi/productsActions";

function DashBoardCreateProduct({ setPage }) {
  const [
    { features, name, brand, pickupAddress, shortDescription, description },
    dispatch,
  ] = useProductValue();

  const setFeatures = (featuresUpdate) => {
    dispatch(setFormFeatures(featuresUpdate));
  };

  const addFeature = (event) => {
    event.preventDefault();

    if (features.length <= 12) setFeatures([...features, ""]);
  };

  const updateFeature = (event, index) => {
    let featuresClone = [...features];

    featuresClone.forEach((feature, i) => {
      if (i === index) {
        featuresClone[index] = event.target.value;
      }
    });

    setFeatures(featuresClone);
  };

  const moveToNext = (event) => {
    event.preventDefault();

    setPage(2);
  };

  return (
    <div className={styles.dashboard_create_product}>
      <img
        className={styles.main_img}
        src={
          "https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2018/04/10095553/Amazon-seller-central.png"
        }
        alt=""
      />

      <form className={styles.main_form}>
        <h2 className={styles.form_heading}>Create a new product</h2>

        <div className={styles.input_div}>
          <p className={styles.form_input_label}>Name of Product</p>

          <input
            className={styles.form_input}
            type="text"
            value={name}
            onChange={(event) =>
              dispatch(setFormName(event.target.value.substr(0, 128)))
            }
          />
        </div>

        <div className={styles.input_div}>
          <p className={styles.form_input_label}>
            Brand{" "}
            <span className={styles.form_brand_desc}>
              (If it is not branded use "Not branded")
            </span>
          </p>
          <input
            className={styles.form_input}
            type={"text"}
            value={brand}
            onChange={(event) =>
              dispatch(setFormBrand(event.target.value.substr(0, 128)))
            }
          />
        </div>

        <div className={styles.input_div}>
          <p className={styles.form_input_label}>Pickup Address</p>

          <input
            className={styles.form_input}
            value={pickupAddress}
            onChange={(event) =>
              dispatch(setFormPickupAddress(event.target.value.substr(0, 350)))
            }
          />
        </div>

        <div className={styles.input_div}>
          <p className={styles.form_input_label}>Short Description</p>

          <textarea
            className={styles.form_input}
            value={shortDescription}
            onChange={(event) =>
              dispatch(
                setFormShortDescription(event.target.value.substr(0, 200))
              )
            }
          />

          <p className={styles.input_words}>{shortDescription.length}/200</p>
        </div>

        <div className={styles.input_div}>
          <p className={styles.form_input_label}>Description</p>

          <textarea
            className={styles.form_input}
            value={description}
            onChange={(event) =>
              dispatch(setFormDescription(event.target.value.substr(0, 500)))
            }
          />

          <p className={styles.input_words}>{description.length}/500</p>
        </div>

        <div className={styles.input_div}>
          <p className={styles.form_input_label}>
            Features{" "}
            <span className={styles.form_brand_desc}>
              (Features are a short and to-the-point way to represent
              description. Max 12)
            </span>
          </p>

          {features?.map((item, index) => {
            return (
              <input
                value={features[index]}
                onChange={(event) => updateFeature(event, index)}
                className={styles.feature_input}
                type="text"
                key={index}
              />
            );
          })}

          <button className={styles.add_feature} onClick={addFeature}>
            <span className={styles.add_feature_plus}>+</span>
          </button>
        </div>

        <button onClick={moveToNext} className={styles.next_button}>
          Next <span className={styles.next_button_arrow}>></span>
        </button>
      </form>
    </div>
  );
}

export default DashBoardCreateProduct;
