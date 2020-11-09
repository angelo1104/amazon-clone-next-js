import React from "react";
import styles from './SellerHeader.module.css'

function SellerHeader() {
    return(
        <div className={styles.seller_header}>
            <h3 className={styles.seller_heading}>Sell on Amazon</h3>

            <button className={styles.seller_button} type="submit">Sign Up</button>
        </div>
    )
}

export default SellerHeader;