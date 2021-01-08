import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchPage.module.css";
import ProductTile from "./ProductTile/ProductTile";
import VizSensor from "react-visibility-sensor";
import productInstance from "../../axios/productInstance";
import { useStateValue } from "../../ContextApi/StateProvider";

function SearchPage({ serverHits }) {
  const [hits, setHits] = useState([]);
  const [visible, setVisible] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);

  const [{ searchText }] = useStateValue();

  const fetchProducts = async () => {
    try {
      console.log("fetched");

      const { data } = await productInstance.post("/paginate", {
        page: page + 1,
        query: searchText,
      });

      setPage((pager) => pager + 1);
      setNext(data.next);
      setHits((hitler) => [...hitler, ...data.hits]);

      setPage((page) => page + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Pagey", page, "Nexter", next);
  }, [page, next]);

  useEffect(() => {
    if (visible) {
      //loader is visible fetch products
      if (next) {
        //products are there you can fetch
        fetchProducts();
      } else {
        //no more products
      }
    }
  }, [visible]);

  useEffect(() => {
    setHits(serverHits.hits);
    setNext(serverHits.next);
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.ad}></div>

      <div className={styles.product_list}>
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

        <VizSensor onChange={(isVisible) => setVisible(isVisible)}>
          <div>Hi i am loader.</div>
        </VizSensor>
      </div>
    </div>
  );
}

export default SearchPage;
