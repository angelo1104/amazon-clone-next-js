import React from 'react'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AmazonHomePage from "../Components/AmazonHomePage/AmazonHomePage";
import axios from 'axios'

export default function Home({cardData, productData}) {
  return (
    <div className={'home'}>
        <Header/>
        <AmazonHomePage cardData={cardData}/>
        <Footer/>
    </div>
  )
}


export async function getStaticProps(context) {
    const cardData = await axios.get('http://localhost:3000/api/get/data/cards')


    return{
        props:{
            cardData: cardData.data,
        },
    }
}
