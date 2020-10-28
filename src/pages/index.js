import React from 'react'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AmazonHomePage from "../Components/AmazonHomePage/AmazonHomePage";

export default function Home() {
  return (
    <div className={'home'}>
        <Header/>
        <AmazonHomePage/>
        <Footer/>
    </div>
  )
}
