import React from "react";
import styles from './AmazonCardRow.module.css';
import AmazonCard from "../AmazonCard/AmazonCard";
import productStyles from '../AmazonCard/CardProduct.module.css'

function AmazonCardRow({cardData}) {
    return(
        <div className={styles.amazon_card_row}>
            {
                cardData.map((card,index)=>{
                    if (card.isSquare){
                        return (
                        <AmazonCard key={`${index}${Math.random()}`}>
                            <h4 className={productStyles.amazon_card_title}>{card.title}</h4>

                            <div className={productStyles.square_images}>
                                <a href={card.image1Url} className={productStyles.amazon_square_link}>
                                    <img className={productStyles.square_image} src={card.image1} alt="" />
                                    <p className={productStyles.square_image_title}>{card.image1Title}</p>
                                </a>
                                <a href={card.image2Url} className={productStyles.amazon_square_link}>
                                    <img className={productStyles.square_image} src={card.image2} alt="" />
                                    <p className={productStyles.square_image_title}>{card.image2Title}</p>
                                </a>
                                <a href={card.image3Url} className={productStyles.amazon_square_link}>
                                    <img className={productStyles.square_image} src={card.image3} alt="" />
                                    <p className={productStyles.square_image_title}>{card.image3Title}</p>
                                </a>
                                <a href={card.image3Url} className={productStyles.amazon_square_link}>
                                    <img className={productStyles.square_image} src={card.image4} alt="" />
                                    <p className={productStyles.square_image_title}>{card.image4Title}</p>
                                </a>
                            </div>

                            <a href={card.linkUrl} className={productStyles.amazon_card_link}>{card.linkTitle}</a>
                        </AmazonCard>
                        )
                    }

                    return (
                    <AmazonCard key={`${index}${Math.random()}`}>
                        <h4 className={productStyles.amazon_card_title}>{card.title}</h4>

                        <a href={card.linkUrl}>
                            <img className={productStyles.amazon_card_image} src={card.imageUrl} alt="" />
                        </a>

                        <a href={card.linkUrl} className={productStyles.amazon_card_link}>{card.linkTitle}</a>
                    </AmazonCard>
                    )
                })
            }
        </div>
    )
}

export default AmazonCardRow;