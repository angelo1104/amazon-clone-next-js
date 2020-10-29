import React from "react";
import styles from './AmamzonProductsRow.module.css';
import AmazonRowProduct from "./AmazonRowProduct/AmazonRowProduct";

function AmazonProductsRow() {
    return(
        <div className={styles.amazon_products_row}>
            <div className={styles.amazon_row_header}>
                <h5 className={styles.amazon_row_title}>
                    Under 30 bucks
                </h5>

                <a href="#" className={styles.amazon_row_link}>
                    Shop now
                </a>
            </div>


            <div className={styles.row_products_main}>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
            </div>

        </div>
    )
}

export default AmazonProductsRow