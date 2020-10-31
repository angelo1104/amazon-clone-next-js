import React from "react";
import styles from './AmazonHomePage.module.css';
import slider from './AmazonSlider.module.css'
import AmazonCardRow from "./AmazonCardRow/AmazonCardRow";
import AmazonProductsRow from "./AmazonProductsRow/AmazonProductsRow";
import {firstCardData, secondCardData, thirdCardData} from "./amazonCardsData";
import {
    eightProductsData,
    fifthProductData,
    firstProductsData,
    fourthProductsData, productDataStore,
    secondProductsData, seventhProductsData, sixthProductData,
    thirdProductsData
} from "./amazonProductsData";

function AmazonHomePage() {
    return(
        <div className={styles.amazon_home_page}>
            <div className={slider.amazon_home_slider}>
                <img className={slider.amazon_slider_image} src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg'} alt="" />
            </div>

            <div className={styles.amazon_home_page_products}>
                <AmazonCardRow cardData={firstCardData}/>
                <AmazonCardRow cardData={secondCardData}/>

                <AmazonProductsRow {...productDataStore.firstProductsData} id={1} />
                <AmazonProductsRow {...productDataStore.secondProductsData} id={2} />
                <AmazonProductsRow {...productDataStore.thirdProductsData} id={3} />

                <AmazonCardRow cardData={thirdCardData}/>

                <AmazonProductsRow {...productDataStore.fourthProductsData} id={4}/>
                <AmazonProductsRow {...productDataStore.fifthProductsData} id={5}/>
                <AmazonProductsRow {...productDataStore.sixthProductsData} id={6}/>
                <AmazonProductsRow {...productDataStore.seventhProductsData} id={7}/>
                <AmazonProductsRow {...productDataStore.eightProductsData} id={8}/>
            </div>
        </div>
    )
}

export default AmazonHomePage;