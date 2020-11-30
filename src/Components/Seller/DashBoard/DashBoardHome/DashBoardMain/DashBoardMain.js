import React from "react";
import styles from './DashBoardMain.module.css';
import DashBoardMainCard from "./DashBoardMainCard/DashBoardMainCard";
import DashBoardProductsCard from "./DashBoardProductsCard/DashBoardProductsCard";
import SearchIcon from '@material-ui/icons/Search';


function DashBoardMain() {
    return(
        <div className={styles.main_dashboard}>
            <DashBoardMainCard/>


            <div className={styles.products_ref}>
                <h3 className={styles.products_ref_title}>Your Products</h3>

                <div className={styles.search}>
                    <div className={styles.search_box}>
                        <SearchIcon className={styles.search_icon}/>
                        <input placeholder={'Title, status, etc.'} className={styles.search_input} type="text" name="" id="" />
                    </div>
                    <button className={styles.search_button} type="submit">Search</button>
                </div>
            </div>
            <DashBoardProductsCard/>
        </div>
    )
}

export default DashBoardMain;