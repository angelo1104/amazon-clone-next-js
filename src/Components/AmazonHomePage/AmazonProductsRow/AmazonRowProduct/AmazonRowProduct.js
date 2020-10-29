import React from "react";
import styles from './AmazonRowProduct.module.css';

function AmazonRowProduct() {
    return(
        <div className={styles.amazon_row_product}>
            <img className={styles.amazon_row_product_image} src="https://m.media-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg" alt=""/>
        </div>
    )
}

export default AmazonRowProduct;