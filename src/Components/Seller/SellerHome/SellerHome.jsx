import React from "react";
import styles from './SellerHome.module.css';
import Header from "../../Header/Header";
import SellerHeader from "./SellerHeader/SellerHeader";

function SellerHome() {
    return(
        <div className={styles.seller_home}>
            <Header/>

            <div>
                <SellerHeader/>
            </div>
        </div>
    )
}

export default SellerHome;