import React from "react";
import styles from './FooterColumn.module.css';

function FooterColumn({data}) {
    return(
        <div className={styles.footer_column}>
            <h4 className={styles.footer_link_title}>{data?.title}</h4>

            <div className={styles.footer_column_links}>
                {data?.links?.map((link, index)=>{
                    return <a key={index} href={link?.url} className={styles.footer_column_link}>{link?.name}</a>
                })}
            </div>
        </div>
    )
}

export default FooterColumn;