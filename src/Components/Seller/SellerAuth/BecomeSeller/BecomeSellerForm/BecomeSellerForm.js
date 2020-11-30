import React, {useState} from "react";
import styles from './BecomeSellerForm.module.css';
import BecomeSellerPersonal from "./BecomeSellerPersonal/BecomeSellerPersonal";
import Link from "next/link";
import SwitchForm from "./SwitchForm";

function BecomeSellerForm({isUser}) {

    return(
        <div className={styles.become_seller_form}>
            <Link href={'/seller/products'}>
                <img className={styles.amazon_logo}
                     src={'https://images-na.ssl-images-amazon.com/images/G/01/rainier/nav/SellerCentral_Bliss._CB485924389_.png'}
                     alt=""/>
            </Link>

            <form onSubmit={e=>e.preventDefault()} className={styles.become_seller_personal_form}>

                <h1 className={styles.seller_form_heading}>
                    Become Amazon Seller
                </h1>

                <SwitchForm/>
            </form>
        </div>
    )
}

export default BecomeSellerForm;