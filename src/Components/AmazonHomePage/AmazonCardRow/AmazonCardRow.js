import React from "react";
import styles from './AmazonCardRow.module.css';
import AmazonCard from "../AmazonCard/AmazonCard";
import productStyles from '../AmazonCard/CardProduct.module.css'

function AmazonCardRow() {
    return(
        <div className={styles.amazon_card_row}>
            <AmazonCard>
                <h4 className={productStyles.amazon_card_title}>Best Picks</h4>

                <img className={productStyles.amazon_card_image} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" alt="" />

                <a href={'#'} className={productStyles.amazon_card_link}>Learn More</a>
            </AmazonCard>
            <AmazonCard>
                <h4 className={productStyles.amazon_card_title}>Best Picks</h4>

                <img className={productStyles.amazon_card_image} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" alt="" />

                <a href={'#'} className={productStyles.amazon_card_link}>Learn More</a>
            </AmazonCard>
            <AmazonCard>
                <h4 className={productStyles.amazon_card_title}>Best Picks</h4>

                <img className={productStyles.amazon_card_image} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" alt="" />

                <a href={'#'} className={productStyles.amazon_card_link}>Learn More</a>
            </AmazonCard>
            <AmazonCard>
                <h4 className={productStyles.amazon_card_title}>Sign in for the best experience</h4>

                <button className={productStyles.amazon_card_signin_button}>Sign in securely</button>
            </AmazonCard>
        </div>
    )
}

export default AmazonCardRow;