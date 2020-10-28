import React from "react";
import styles from './AmazonCard.module.css';

function AmazonCard({children}) {
    return(
        <div className={styles.amazon_card}>
            {children}
        </div>
    )
}

export default AmazonCard;