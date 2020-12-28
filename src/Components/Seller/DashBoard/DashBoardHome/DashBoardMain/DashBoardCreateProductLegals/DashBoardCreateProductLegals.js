import React from "react";
import styles from "./DashBoardCreateProductLegals.module.css";
import { useProductValue } from "../../../../../../ContextApi/ProductProvider";
import {
  setFormPrice,
  setFormSearchTerm,
} from "../../../../../../ContextApi/productsActions";

function DashBoardCreateProductLegals({ setPage, page }) {
  const [{ price, searchTerm }, dispatch] = useProductValue();

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
            onChange={(event) => dispatch(setFormPrice(event.target.value))}
          />
        </div>

        <div className={styles.input_div}>
          <p className={styles.label}>Search Term</p>
          <input
            className={styles.input}
            type="text"
            value={searchTerm}
            onChange={(event) =>
              dispatch(setFormSearchTerm(event.target.value))
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

          <button className={styles.step_button}>Create</button>
        </div>
      </form>
    </div>
  );
}

export default DashBoardCreateProductLegals;
