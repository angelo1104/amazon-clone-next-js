import React, {useEffect, useState} from "react";
import styles from './AmamzonProductsRow.module.css';
import AmazonRowProduct from "./AmazonRowProduct/AmazonRowProduct";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function AmazonProductsRow({productsData ,title, shopUrl}) {
    const [translate,setTranslate] = useState(0)

    const momentum = 500;

    const scrollRight = ()=>{
        setTranslate(translate+momentum)
    }

    const scrollLeft = ()=>{
        setTranslate(translate-momentum)
    }

    useEffect(()=>{
        const container = document.querySelector(`.${styles.row_products_main}`);

        container.scrollTo({
            left: translate,
            behavior: 'smooth'
        })
    },[translate])

    const mouseOver = ()=>{
        const leftButton = document.querySelector(`.${styles.row_products_scroll_button_left}`)
        const rightButton = document.querySelector(`.${styles.row_products_scroll_button_right}`)

        leftButton.classList.add('visible')
        rightButton.classList.add('visible')
    }

    const mouseDown = ()=>{
        const leftButton = document.querySelector(`.${styles.row_products_scroll_button_left}`)
        const rightButton = document.querySelector(`.${styles.row_products_scroll_button_right}`)

        leftButton.classList.remove('visible')
        rightButton.classList.remove('visible')
    }

    return(
        <div className={styles.amazon_products_row}>
            <div className={styles.amazon_row_header}>
                <h5 className={styles.amazon_row_title}>
                    {title}
                </h5>

                <a href={shopUrl} className={styles.amazon_row_link}>
                    Shop now
                </a>
            </div>


            <div onMouseOver={mouseOver} onMouseLeave={mouseDown} className={styles.row_products_main}>
                <button onClick={scrollLeft} className={styles.row_products_scroll_button_left}><ChevronLeftIcon/></button>
                <button onClick={scrollRight} className={styles.row_products_scroll_button_right}><ChevronRightIcon/></button>

                {
                    productsData.map((product, index)=>{
                        return <AmazonRowProduct key={index} {...product}/>
                    })
                }
            </div>

        </div>
    )
}

export default AmazonProductsRow