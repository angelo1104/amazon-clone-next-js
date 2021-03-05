import React, { useEffect, useState } from "react";
import styles from "./DashBoardMain.module.css";
import DashBoardMainCard from "./DashBoardMainCard/DashBoardMainCard";
import DashBoardProductsCard from "./DashBoardProductsCard/DashBoardProductsCard";
import SearchIcon from "@material-ui/icons/Search";
import productInstance from "../../../../../axios/productInstance";
import { useStateValue } from "../../../../../ContextApi/StateProvider";

function DashBoardMain() {
  const [products, setProducts] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      console.log("working on it");
      productInstance
        .post("/read-many", {
          filter: {
            ownerEmail: user?.attributes?.email,
          },
        })
        .then(({ data: { product } }) => {
          setProducts(product);
        })
        .catch((e) => console.log(e));
    }
  }, [user]);

  return (
    <div className={styles.main_dashboard}>
      <DashBoardMainCard />

      <div className={styles.products_ref}>
        <h3 className={styles.products_ref_title}>Your Products</h3>

        <div className={styles.search}>
          <div className={styles.search_box}>
            <SearchIcon className={styles.search_icon} />
            <input
              placeholder={"Title, status, etc."}
              className={styles.search_input}
              type="text"
              name=""
              id=""
            />
          </div>
          <button className={styles.search_button} type="submit">
            Search
          </button>
        </div>
      </div>

      {Object.values(products)?.map((product, index) => (
        <DashBoardProductsCard
          key={index}
          description={product.shortDescription}
          image={product.avatar}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default DashBoardMain;
