import React, {useState} from "react";
import styles from './AmamzonProductsRow.module.css';
import AmazonRowProduct from "./AmazonRowProduct/AmazonRowProduct";

function AmazonProductsRow() {
    const [translate,setTranslate] = useState(0)

    const scrollRight = ()=>{
        const container = document.querySelector(`.${styles.row_products_main}`)

        container.scrollTo({
            left: translate+200,
            behavior: 'smooth'
        })

        setTranslate(translate+200)
    }

    return(
        <div className={styles.amazon_products_row}>
            <div className={styles.amazon_row_header}>
                <h5 className={styles.amazon_row_title}>
                    Under 30 bucks
                </h5>

                <a href="#" className={styles.amazon_row_link}>
                    Shop now
                </a>
            </div>


            <div className={styles.row_products_main}>
                <button className={styles.row_products_scroll_button_left}>left</button>
                <button onClick={scrollRight} className={styles.row_products_scroll_button_right}>right</button>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
                <AmazonRowProduct/>
            </div>

        </div>
    )
}

export default AmazonProductsRow