import React from "react";
import styles from './SellerMain.module.css';
import comma from './comma.png'
import Reveal from 'react-reveal/Reveal'
import Link from "next/link";

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

                        <Link href={'/seller/products/auth/login'}>
                            <button className={styles.sign_up_button} type={'submit'}>
                                Sign Up
                            </button>
                        </Link>

                        <p className={styles.seller_fees}>$39.99 a month + selling fees</p>
                    </div>
                    <div className={styles.seller_main_first_right}>
                        <Reveal effect={styles.fade_in} delay={1000}>
                            <img className={styles.seller_main_first_img} src="https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-2.png" alt=""/>
                        </Reveal>
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

            <div className={styles.seller_main_second}>
                <Reveal effect={styles.fade_in_left} delay={500}>
                    <div className={styles.seller_main_feature_card}>
                        <img className={styles.feature_card_image} src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Desktop_Computer._CB424651243_.svg" alt="" />

                        <h2 className={styles.feature_card_title}>
                            Sell More
                        </h2>

                        <p className={styles.feature_card_desc}>
                            Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and resellers. Independent third-party sellers sold more than a billion items during the 2019 holiday season alone.
                        </p>

                        <a href="#" className={styles.seller_main_special_link}>How to get Started </a>
                    </div>
                </Reveal>

                <Reveal effect={styles.fade_in_left} delay={900}>
                    <div className={styles.seller_main_feature_card}>
                        <img className={styles.feature_card_image} src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Shipping._CB424651256_.svg" alt="" />

                        <h2 className={styles.feature_card_title}>
                            Scale with FBA
                        </h2>

                        <p className={styles.feature_card_desc}>
                            Leave the shipping, returns, and customer service to us with Fulfillment by Amazon (FBA). It’s the easiest way to reach 150 million paid Prime members around the world.                    </p>

                        <a href="#" className={styles.seller_main_special_link}>What is FBA? </a>
                    </div>
                </Reveal>

                <Reveal effect={styles.fade_in_left} delay={1300}>
                    <div className={styles.seller_main_feature_card}>
                        <img className={styles.feature_card_image} src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Paid_Services_USD._CB424651263_.svg" alt="" />

                        <h2 className={styles.feature_card_title}>
                            Make money
                        </h2>

                        <p className={styles.feature_card_desc}>
                            In 2019, nearly 225,000 Amazon sellers worldwide eclipsed $100,000 in sales, up from nearly 200,000 in 2018—and 15,000 U.S. businesses broke $1 million.                    </p>

                        <a href="#" className={styles.seller_main_special_link}>Explore selling programs</a>
                    </div>
                </Reveal>

            </div>

            <div className={styles.seller_main_third}>
                <div className={styles.seller_main_third_row}>
                    <Reveal effect={styles.fade_in_left} delay={500}>
                        <div className={styles.third_left}>
                            <img className={styles.third_main_image} src="https://m.media-amazon.com/images/G/01/sell/images/Anker-01._CB1580163796_.jpg" alt=""/>
                        </div>
                    </Reveal>

                    <Reveal effect={styles.fade_in} delay={900}>
                        <div className={styles.third_right}>
                            <img src={comma} alt=""/>

                            <h3 className={styles.third_right_heading}>
                                With all the infrastructure, systems, and processes Amazon built I realized that selling efficiency is no longer a problem.
                            </h3>

                            <div className={styles.name_author}>
                                <img className={styles.name_author_image} src={'https://m.media-amazon.com/images/G/01/sell/images/headshots/syang-2-2x.png'} alt=""/>

                                <div className={styles.name_author_about}>
                                    <h5 className={styles.name_author_name}>Steven Yang</h5>
                                    <p className={styles.name_author_desc}>Anker Technology</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>


                </div>

                <div className={styles.seller_main_third_links}>
                    <h6 className={styles.seller_links_title}>learn more</h6>

                    <div className={styles.seller_main_links_third}>
                        <a href="#" className={styles.seller_main_special_link}>Sell online with Amazon: Beginner's Guide</a>
                        <a href="#" className={styles.seller_main_special_link}>Grow your ecommerce business with Amazon</a>
                        <a href="#" className={styles.seller_main_special_link}>Build an online store featuring your brand</a>
                        <a href="#" className={styles.seller_main_special_link}>Watch free tutorial videos from Seller Academy</a>
                        <a href="#" className={styles.seller_main_special_link}>Get help from an amazon account manager</a>
                        <a href="#" className={styles.seller_main_special_link}>Amazon handmade, Amazon Business, and more</a>
                        <a href="#" className={styles.seller_main_special_link}>How much does it cost to sell on amazon?</a>
                        <a href="#" className={styles.seller_main_special_link}>Use FBA to scale your ecommerce business</a>
                        <a href="#" className={styles.seller_main_special_link}>Advertise your products on Amazon</a>
                        <a href="#" className={styles.seller_main_special_link}>Case studies about Amazon third-party sellers</a>
                    </div>
                </div>

                <p className={styles.seller_third_individual}>Just have a few items to sell? <a href="#" className={styles.seller_main_special_link_inline}>Sign Up to become an individual seller</a></p>
            </div>


            <div className={styles.seller_main_fourth}>
                <h1 className={styles.seller_fourth_heading}>
                    Start selling today
                </h1>

                <h4 className={styles.seller_fourth_subheading}>Put your products in front of more than 300 million customers worldwide.</h4>

                <Link href={'/seller/products/auth/login'}>
                    <button className={styles.sign_up_button} type={'submit'}>
                        Sign Up
                    </button>
                </Link>


            <p className={styles.seller_fees}>$39.99 a month + selling fees</p>
            </div>

        </div>
    )
}

export default SellerMain;