import React from "react";
import styles from './AuthFooter.module.css';
import Link from "next/link";

function AuthFooter() {
    return(
        <div className={styles.auth_footer}>
            <div className={styles.auth_footer_gradient}>

            </div>

            <div className={styles.auth_footer_links}>

                <Link href={'#'}>
                    <a className={styles.auth_footer_link}>
                        Conditions of use
                    </a>
                </Link>

                <Link href={'#'}>
                    <a className={styles.auth_footer_link}>
                        Privacy Notice
                    </a>
                </Link>

                <Link href={'#'}>
                    <a className={styles.auth_footer_link}>
                        Help
                    </a>
                </Link>
            </div>

            <p className={styles.copyright}>&copy; 2020 The Wool Inc</p>
        </div>
    )
}

export default AuthFooter;