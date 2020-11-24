import React from "react";
import styles from './DashBoardFooter.module.css';
import socials from './Screenshot.png'

function DashBoardFooter() {
    return(
        <div className={styles.dashboard_footer}>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <img className={styles.footer_logo} src="https://feinternational.com/wp-content/uploads/2015/11/FBA_logo_us-300x140.jpg" alt=""/>
                </div>
                <div className={styles.column}>
                    <p className={styles.info}>&copy; 1996-2020, Amazon.com, Inc. or its affiliates. All Rights Reserved.</p>
                    <p className={styles.info}>Amazon and FBA are trademarks of Amazon.com Inc. or its affiliates.</p>
                </div>

                <div className={styles.column}>
                    <img src={socials} alt=""/>
                </div>

                <div className={styles.column}>
                    <a href="#" className={styles.column_link}>
                        <span className={styles.link_blue}>FBA</span>
                        Profit more reach more customers with help from Amazon
                    </a>
                </div>
                <div className={styles.column}>
                    <a href="#" className={styles.column_link}>
                        <span className={styles.link_blue}>Community</span>
                        Get help from our on growing community
                    </a>
                </div>
                <div className={styles.column}>
                    <a href="#" className={styles.column_link}>
                        <span className={styles.link_blue}>See billings and payments</span>
                        Learn more about billing and royalties.
                    </a>
                </div>
                <div className={styles.column}>
                    <a href="#" className={styles.column_link}>
                        <span className={styles.link_blue}>Sell Books</span>
                        Sell ebooks and paperback with KDP.
                    </a>
                </div>

            </div>

            <div className={styles.footer_links}>
                <a className={styles.footer_link}>
                    Terms & Conditions
                </a>
                <a className={styles.footer_link}>
                    Privacy Notice
                </a>
                <a className={styles.footer_link}>
                    Conditions of use
                </a>
                <a className={styles.footer_link}>
                    Contact Us
                </a>
            </div>
        </div>
    )
}

export default DashBoardFooter