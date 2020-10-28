import React from "react";
import styles from './AmazonHomePage.module.css';
import slider from './AmazonSlider.module.css'
import AmazonCardRow from "./AmazonCardRow/AmazonCardRow";

function AmazonHomePage() {
    return(
        <div className={styles.amazon_home_page}>
            <div className={slider.amazon_home_slider}>
                <img className={slider.amazon_slider_image} src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg'} alt="" />
            </div>

            <div className={styles.amazon_home_page_products}>
                <AmazonCardRow />
            </div>
        </div>
    )
}

export default AmazonHomePage;