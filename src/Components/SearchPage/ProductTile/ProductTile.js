import React from "react";
import styles from './ProductTile.module.css';

function ProductTile({title, imageUrl, price, brand}) {
    return(
        <a className={styles.product_with_divider}>
            <div className={styles.product}>
                <img className={styles.product_img} src={'https://m.media-amazon.com/images/I/71BMVOs2xML._AC_UY218_.jpg'} alt=""/>

                <div className={styles.product_details}>
                    <h3 className={styles.product_title}>{title}</h3>

                    <div className={styles.brandy}>
                        <p className={styles.product_price}>${parseInt(price)} <span className={styles.super_cents}>{(price+"").split(".")[1]}</span></p>

                        <p className={styles.product_price}>{brand}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProductTile