import React from 'react';
import styles from './DashBoardMainCard.module.css';

function DashBoardMainCard() {
    return(
        <div className={styles.dashboard_main_card}>
            <h2 className={styles.title}>
                Add New Product
            </h2>

            <div className={styles.main_card}>
                <div className={styles.main_card_left}>
                    <div className={styles.block}>
                        <span className={styles.block_plus}>+</span>
                        <span className={styles.block_title}>Add Product</span>
                    </div>
                </div>

                <div className={styles.main_card_right}>
                    <p className={styles.one_info}>
                        <span className={styles.info_title}>Type :</span>
                        <span className={styles.info_desc}>Your product should categorize as one of our product categories.</span>
                    </p>
                    <p className={styles.one_info}>
                        <span className={styles.info_title}>Payments :</span>
                        <span className={styles.info_desc}>You have to setup stripe in order to get payments into your account.</span>
                    </p>
                    <p className={styles.one_info}>
                        <span className={styles.info_title}>Delivery :</span>
                        <span className={styles.info_desc}>Once an order is placed a delivery guy will pick up the order from your specified address.</span>
                    </p>
                    <p className={styles.one_info}>
                        <span className={styles.info_title}>Refunds :</span>
                        <span className={styles.info_desc}>If order is refunded successfully then your product will be sent back to you and your money will be took back.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DashBoardMainCard;