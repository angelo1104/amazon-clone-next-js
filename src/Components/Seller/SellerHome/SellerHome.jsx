import React from "react";
import styles from './SellerHome.module.css';
import Header from "../../Header/Header";
import SellerHeader from "./SellerHeader/SellerHeader";
import SellerMain from "./SellerMain/SellerMain";
import Footer from "../../Footer/Footer";

function SellerHome() {
    return(
        <div className={styles.seller_home}>
            <Header/>

            <div>
                <SellerHeader/>

                <SellerMain/>
            </div>

            <Footer/>
        </div>
    )
}

export default SellerHome;