import React, {useEffect, useState} from "react";
import styles from './AmamzonProductsRow.module.css';
import AmazonRowProduct from "./AmazonRowProduct/AmazonRowProduct";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function AmazonProductsRow({products ,title, shopUrl, urlTitle, id}) {
    const [translate,setTranslate] = useState(0)

    const momentum = 700;

    const scrollRight = ()=>{
        setTranslate(translate+momentum)
    }

    const scrollLeft = ()=>{
        setTranslate(translate-momentum)
    }

    useEffect(()=>{
        const container = document.querySelector(`#carouselOfProducts${id}`);

        container.scrollTo({
            left: translate,
            behavior: 'smooth'
        })
    },[translate])

    const mouseOver = ()=>{
        const leftButton = document.querySelector(`#left${id}`)
        const rightButton = document.querySelector(`#right${id}`)

        leftButton.classList.add('visible')
        rightButton.classList.add('visible')
    }

    const mouseDown = ()=>{
        const leftButton = document.querySelector(`#left${id}`)
        const rightButton = document.querySelector(`#right${id}`)

        leftButton.classList.remove('visible')
        rightButton.classList.remove('visible')
    }

    return(
        <div className={styles.amazon_products_row} onMouseOver={mouseOver} onMouseLeave={mouseDown}>
            <div className={styles.amazon_row_header}>
                <h5 className={styles.amazon_row_title}>
                    {title}
                </h5>

                <a href={shopUrl} className={styles.amazon_row_link}>
                    {urlTitle}
                </a>
            </div>

            <button id={`left${id}`} onClick={scrollLeft} className={styles.row_products_scroll_button_left}><ChevronLeftIcon className={styles.chevron_icon}/></button>
            <button id={`right${id}`} onClick={scrollRight} className={styles.row_products_scroll_button_right}><ChevronRightIcon className={styles.chevron_icon}/></button>


            <div id={`carouselOfProducts${id}`} className={styles.row_products_main}>
                {
                    products.map((product, index)=>{
                        return <AmazonRowProduct key={index} {...product}/>
                    })
                }
            </div>

        </div>
    )
}

export default AmazonProductsRow