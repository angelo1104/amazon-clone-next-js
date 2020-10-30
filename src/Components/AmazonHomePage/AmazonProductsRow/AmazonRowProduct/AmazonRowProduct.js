import React from "react";
import styles from './AmazonRowProduct.module.css';

function AmazonRowProduct({imageUrl,link}) {
    return(
        <div className={styles.amazon_row_product}>
            <a href={link}>
                <img className={styles.amazon_row_product_image} src={imageUrl} alt=""/>
            </a>
        </div>
    )
}

export default AmazonRowProduct;