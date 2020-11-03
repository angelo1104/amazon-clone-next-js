import React from "react";
import styles from './ResponsiveHeaderItem.module.css';
import cart from '../../../public/basket.svg'
import Link from "next/link";

function ResponsiveHeaderItem() {
    return(
        <div className={styles.responsive_header_item}>
            <div className={styles.responsive_sign_in}>
                <Link href={'/auth/email/sign-up'}>
                    <p>Sign In</p>
                </Link>
            </div>

            <div className={styles.responsive_cart}>
                <img src={cart} alt="" />
                <span className={styles.responsive_basket_count}>
                    0
                </span>
            </div>
        </div>
    )
}

export default ResponsiveHeaderItem;