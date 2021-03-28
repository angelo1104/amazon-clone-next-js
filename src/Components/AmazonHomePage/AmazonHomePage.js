import React, { useEffect } from "react";
import styles from "./AmazonHomePage.module.css";
import slider from "./AmazonSlider.module.css";
import AmazonCardRow from "./AmazonCardRow/AmazonCardRow";
import AmazonProductsRow from "./AmazonProductsRow/AmazonProductsRow";
import { useStateValue } from "../../ContextApi/StateProvider";
import { setShowAutoComplete } from "../../ContextApi/actions";
import Carousel from "../Carousel/Carousel";
import BuyProduct from "./BuyProduct/BuyProduct";
import { useRouter } from "next/router";

function AmazonHomePage({ cardData, productDataStore }) {
  const [{ showAutoComplete }, dispatch] = useStateValue();
  const router = useRouter();

  const hideAutoComplete = () => {
    dispatch(setShowAutoComplete(false));
  };

  useEffect(() => {
    if (showAutoComplete) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [showAutoComplete]);

  function disableScroll() {
    // Get the current page scroll position
    const body = document.querySelector("body");
    body.classList.add("scroll");
  }

  function enableScroll() {
    const body = document.querySelector("body");
    body.classList.remove("scroll");
  }

  return (
    <div className={styles.amazon_home_page}>
      {showAutoComplete && (
        <div
          className={styles.auto_complete_overlay}
          onClick={hideAutoComplete}
        ></div>
      )}

      <div className={slider.amazon_home_slider}>
        <Carousel
          data={[
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
          ]}
        />
      </div>

      <div className={styles.amazon_home_page_products}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <BuyProduct
            title={"Yoga mat"}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            }
            onClick={() => router.push("/product?q=605f225bfaa15c2dad437300")}
          />
          <BuyProduct
            title={"Flaunt it"}
            image={
              "https://www.apple.com/v/iphone-12/f/images/overview/camera/deep_fusion__djiny4608bo2_large.jpg"
            }
            onClick={() => router.push("/product?q=601166ad4e8ed316a9ee9363")}
          />

          <BuyProduct
            title={"iPad air"}
            image={
              "https://www.apple.com/v/ipad/home/bk/images/overview/compare_ipad_air__dlzfpz8gev42_large.png"
            }
            onClick={() => router.push(`/product?q=60431b723a0cf00984c9bbc8`)}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <BuyProduct
            title={"Watch"}
            image={
              "https://firebasestorage.googleapis.com/v0/b/subtle-anthem-265314.appspot.com/o/products%2Fmadhav1004%40icloud.com%2FVipMVm2ceUA_oMdXlgKJjeRQJ1bM%2FWatch%2Fwear%20pods.jpg1?alt=media&token=22cce251-dcfa-468e-9873-33a4af2ae707"
            }
            onClick={() => router.push("/product?q=605f208efaa15c2dad4372ff")}
          />
          <BuyProduct
            title={"iPhone"}
            image={
              "https://firebasestorage.googleapis.com/v0/b/subtle-anthem-265314.appspot.com/o/products%2Fmadhav1004%40icloud.com%2FVTV1G53wBtyEe4jgJCn51-A_tZUf%2FiPhone%2012%20mini%2Fyou%20mini.jpg2?alt=media&token=43962d44-66a0-4dcc-b95b-1b1318caf7b4"
            }
            onClick={() => router.push("/product?q=605f1b63faa15c2dad4372fe")}
          />
          <BuyProduct
            title={"Pro display XDr"}
            image={
              "https://firebasestorage.googleapis.com/v0/b/subtle-anthem-265314.appspot.com/o/products%2Fmadhav1004%40icloud.com%2FrdarGMH5O9biZqMl0qoohLcCCzv-%2FPro%20display%20xdr%2Fxdr.jpg0?alt=media&token=b55dcdb4-d59b-4dc5-9a74-0def3630ec3d"
            }
            onClick={() => router.push("/product?q=605f2359faa15c2dad437301")}
          />
          <BuyProduct
            title={"Flaunt it"}
            image={
              "https://www.apple.com/v/iphone-12/f/images/overview/camera/deep_fusion__djiny4608bo2_large.jpg"
            }
            onClick={() => router.push("/product?q=601166ad4e8ed316a9ee9363")}
          />
          <BuyProduct
            title={"Flaunt it"}
            image={
              "https://www.apple.com/v/iphone-12/f/images/overview/camera/deep_fusion__djiny4608bo2_large.jpg"
            }
            onClick={() => router.push("/product?q=601166ad4e8ed316a9ee9363")}
          />
        </div>

        {/*<AmazonCardRow cardData={cardData.slice(0, 8)} />*/}

        {/*<AmazonProductsRow {...productDataStore.firstProductsData} id={1} />*/}
        {/*<AmazonProductsRow {...productDataStore.secondProductsData} id={2} />*/}
        {/*<AmazonProductsRow {...productDataStore.thirdProductsData} id={3} />*/}

        {/*<AmazonCardRow cardData={cardData.slice(8, 12)} />*/}

        {/*<AmazonProductsRow {...productDataStore.fourthProductsData} id={4} />*/}
        {/*<AmazonProductsRow {...productDataStore.fifthProductsData} id={5} />*/}
        {/*<AmazonProductsRow {...productDataStore.sixthProductsData} id={6} />*/}
        {/*<AmazonProductsRow {...productDataStore.seventhProductsData} id={7} />*/}
        {/*<AmazonProductsRow {...productDataStore.eightProductsData} id={8} />*/}
      </div>
    </div>
  );
}

export default AmazonHomePage;
