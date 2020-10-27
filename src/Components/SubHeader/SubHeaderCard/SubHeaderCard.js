import React from "react";
import styles from './SubHeaderCard.module.css';

function SubHeaderCard({title}) {
    return(
        <div className={styles.sub_header_card}>
            <p className={styles.sub_header_title}>
                {title}
            </p>
        </div>
    )
}

export default SubHeaderCard;