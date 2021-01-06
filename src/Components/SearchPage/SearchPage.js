import React from "react";
import styles from './SearchPage.module.css';

function SearchPage() {
    return(
        <div className={styles.products}>
            <div className={styles.ad}>

            </div>

            <div className={styles.product_list}>
                <a className={styles.product_with_divider}>
                    <div className={styles.product}>
                        <img className={styles.product_img} src={'https://m.media-amazon.com/images/I/71BMVOs2xML._AC_UY218_.jpg'} alt=""/>

                        <div className={styles.product_details}>
                            <h3 className={styles.product_title}>Mac book pro 13 inches | Awesome stuff for you | Best hardware in the cupboard handpicked by IT professionals and a beautiful OS</h3>
                            <p className={styles.product_price}>$1999 <span className={styles.super_cents}>00</span></p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SearchPage