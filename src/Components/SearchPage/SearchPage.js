import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchPage.module.css";
import ProductTile from "./ProductTile/ProductTile";
import VizSensor from "react-visibility-sensor";
import productInstance from "../../axios/productInstance";
import { useStateValue } from "../../ContextApi/StateProvider";
import productLoader from "../../lottie/products-loader.json";
import Lottie from "lottie-react-web";

function SearchPage({ serverHits }) {
  const [hits, setHits] = useState([]);
  const [visible, setVisible] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);

  const [lottieVisible, setLottieVisible] = useState(true);

  const [{ searchText }] = useStateValue();

  const fetchProducts = async () => {
    try {
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
      //loader is visible fetch product
      if (next) {
        //product are there you can fetch
        fetchProducts();
      } else {
        //no more product
        setTimeout(() => setLottieVisible(false), 3000);
      }
    }
  }, [visible]);

  useEffect(() => {
    setHits(serverHits.hits);
    setNext(serverHits.next);
  }, []);

  return (
    <div className={styles.products}>
      {!serverHits.hits.length && (
        <div className={styles.nothing}>
          <p className={styles.nothing_text}>No results found</p>
        </div>
      )}

      {serverHits.hits.length && <div className={styles.ad}></div>}

      {serverHits.hits.length && (
        <div className={styles.product_list}>
          {hits?.map((hit, index) => {
            return (
              <ProductTile
                key={index}
                brand={hit.brand}
                imageUrl={hit.avatar}
                title={hit.name}
                price={hit.price}
                id={hit.objectID}
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
            <div className={styles.lottie}>
              <div className={styles.lottie_spinner}>
                {lottieVisible && (
                  <Lottie options={{ animationData: productLoader }} />
                )}
              </div>
              {!lottieVisible && (
                <p className={styles.message}>No More Products</p>
              )}
            </div>
          </VizSensor>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
