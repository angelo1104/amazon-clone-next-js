import React from "react";
import styles from './HeaderItems.module.css';
import cart from '../../../public/basket.svg'

function HeaderItems() {
    return(
        <div className={styles.header_items}>
            <div className={styles.header_item}>
                <p className={styles.header_item_line1}>
                    Hello,
                </p>

                <p className={styles.header_item_line2}>
                    Sign In
                </p>
            </div>

            <div className={styles.header_item}>
                <p className={styles.header_item_line1}>
                    Hello,
                </p>

                <p className={styles.header_item_line2}>
                    Sign In
                </p>
            </div>

            <div className={styles.header_item}>
                <p className={styles.header_item_line1}>
                    Returns
                </p>

                <p className={styles.header_item_line2}>
                    & Orders
                </p>
            </div>

            <div className={styles.header_item}>
                <p className={styles.header_item_line2}>
                    <img className={styles.header_item_cart} src={cart} />

                    <span className={styles.header_cart_number}>
                        0
                    </span>
                </p>

            </div>
        </div>
    )
}

export default HeaderItems;