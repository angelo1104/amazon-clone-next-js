import React from "react";
import styles from './SubHeaderCard.module.css';
import Link from "next/link";

function SubHeaderCard({title, link='#'}) {
    return(
        <div className={styles.sub_header_card}>
            <Link href={link}>
                <p className={styles.sub_header_title}>
                    {title}
                </p>
            </Link>
        </div>
    )
}

export default SubHeaderCard;