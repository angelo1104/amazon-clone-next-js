import React from "react";
import styles from './DashBoardHeader.module.css';
import {auth} from "../../../../../firebase";

function DashBoardHeader() {

    const signOut = ()=>{
        auth().signOut()
    }

    return(
        <div>
            <div className={styles.top}>
                <div className={styles.inner_flex}>
                    <div className={styles.inner_item}>
                        <a href="#" className={styles.amazon_link}>
                            Your account
                        </a>
                    </div>
                    <div className={styles.inner_item}>
                        <a href="#" className={styles.amazon_link}>
                            Help
                        </a>
                    </div>
                    <div className={styles.inner_item}>
                        <p onClick={signOut} className={styles.amazon_link}>
                            Sign Out
                        </p>
                    </div>
                    <div className={styles.inner_item}>
                        <img className={styles.mallomar} src={'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif'} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardHeader;