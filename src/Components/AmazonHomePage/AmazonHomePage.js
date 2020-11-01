import React from "react";
import styles from './AmazonHomePage.module.css';
import slider from './AmazonSlider.module.css'
import AmazonCardRow from "./AmazonCardRow/AmazonCardRow";
import AmazonProductsRow from "./AmazonProductsRow/AmazonProductsRow";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import CarouselButton from "./CarouselButton/CarouselButton";

function AmazonHomePage({cardData, productDataStore}) {

    return(
        <div className={styles.amazon_home_page}>
            <div className={slider.amazon_home_slider}>
                <Carousel renderThumbs={()=>[<div></div>]} renderIndicator={()=>[<div></div>]} >
                    <img className={slider.amazon_slider_image} src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg'} alt="" />

                    <img className={slider.amazon_slider_image} src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg'} alt="" />

                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt=""/>

                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>

                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg" alt="" />

                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" alt="" />

                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" alt="" />

                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt=""/>

                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" alt=""/>
                </Carousel>
            </div>

            <div className={styles.amazon_home_page_products}>

                <AmazonCardRow cardData={cardData.slice(0,8)}/>

                <AmazonProductsRow {...productDataStore.firstProductsData} id={1} />
                <AmazonProductsRow {...productDataStore.secondProductsData} id={2} />
                <AmazonProductsRow {...productDataStore.thirdProductsData} id={3} />

                <AmazonCardRow cardData={cardData.slice(8,12)}/>

                <AmazonProductsRow {...productDataStore.fourthProductsData} id={4}/>
                <AmazonProductsRow {...productDataStore.fifthProductsData} id={5}/>
                <AmazonProductsRow {...productDataStore.sixthProductsData} id={6}/>
                <AmazonProductsRow {...productDataStore.seventhProductsData} id={7}/>
                <AmazonProductsRow {...productDataStore.eightProductsData} id={8}/>
            </div>
        </div>
    )
}

export default AmazonHomePage;