import React from "react";
import styles from './SellerMain.module.css';

function SellerMain() {
    return(
        <div className={styles.seller_main}>
            <div className={styles.seller_main_first}>
                <div className={styles.seller_main_first_row}>
                    <div className={styles.seller_main_first_left}>
                        <h1 className={styles.seller_main_first_title}>
                            Become an Amazon seller
                        </h1>

                        <h3 className={styles.seller_main_first_desc}>
                            More than half the units sold in our stores are from independent sellers.
                        </h3>

                        <button className={styles.sign_up_button} type={'submit'}>
                            Sign Up
                        </button>

                        <p className={styles.seller_fees}>$39.99 a month + selling fees</p>
                    </div>
                    <div className={styles.seller_main_first_right}>
                        <img className={styles.seller_main_first_img} src="https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-2.png" alt=""/>
                    </div>
                </div>
                <svg alt="" className={styles.wave_svg} height="278px" preserveAspectRatio="none"
                     role="presentation" version="1.1" viewBox="0 0 1440 278" width="1440px"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="Sandbox" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                            d="M0,260.670469 C268,291.980818 533.333333,258.847538 796,161.270627 C1058.66667,63.6937169 1273.33333,9.93684108 1440,0 L1440,278 L0,278 L0,260.670469 Z"
                            id="Path-8" fill="#ebf8fa"
                            transform="translate(720.000000, 139.000000) scale(-1, 1) translate(-720.000000, -139.000000) ">

                        </path>
                    </g>
                </svg>
            </div>

        </div>
    )
}

export default SellerMain;