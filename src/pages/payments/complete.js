import React from "react";
import styles from './complete.module.css'

function CompletePage() {
    return(
        <div className={styles.complete}>
            <h1 className={styles.title}>
                Hi, please close this modal by clicking on the upper left.
            </h1>
        </div>
    )
}

export default CompletePage