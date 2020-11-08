import React from 'react'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AmazonHomePage from "../Components/AmazonHomePage/AmazonHomePage";
import {productDataStore} from "./api/get/data/productsData";
import {cardData} from "./api/get/data/cardsData";

export default function Home({cardData, productData}) {
  return (
    <div className={'home'}>
        <Header/>
        <AmazonHomePage cardData={cardData} productDataStore={productData}/>
        <Footer/>
    </div>
  )
}


export async function getStaticProps(context) {
    return{
        props:{
            cardData: cardData,
            productData: productDataStore,
        },
    }
}
