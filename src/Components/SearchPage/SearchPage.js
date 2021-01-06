import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchPage.module.css";
import ProductTile from "./ProductTile/ProductTile";

function SearchPage({ serverHits }) {
  const [hits, setHits] = useState([]);

  const productLists = useRef();

  const handleScroll = (event) => {
    console.log("JP");
  };

  useEffect(() => {
    setHits(serverHits.hits);
    console.log(serverHits);
  }, []);

  useEffect(() => {
    console.log("Hitty", hits);
  }, [hits]);

  return (
    <div className={styles.products}>
      <div className={styles.ad}></div>

      <div
        className={styles.product_list}
        ref={productLists}
        onScroll={(event) => handleScroll(event)}
      >
        {hits?.map((hit, index) => {
          return (
            <ProductTile
              key={index}
              brand={hit.brand}
              imageUrl={hit.avatar}
              title={hit.name}
              price={hit.price}
            />
          );
        })}

        <ProductTile
          brand={"Apple Inc"}
          title={
            "Mac book pro 13 inches | Awesome stuff for you | Best hardware in the cupboard handpicked by IT professionals and a beautiful OS"
          }
          price={"1999.99"}
          imageUrl={
            "https://m.media-amazon.com/images/I/71BMVOs2xML._AC_UY218_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default SearchPage;
