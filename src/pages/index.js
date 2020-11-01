import React from 'react'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AmazonHomePage from "../Components/AmazonHomePage/AmazonHomePage";
import axios from 'axios'

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
    const cardData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/data/cards`)
    const productData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/data/products`)


    return{
        props:{
            cardData: cardData.data,
            productData: productData.data,
        },
    }
}
