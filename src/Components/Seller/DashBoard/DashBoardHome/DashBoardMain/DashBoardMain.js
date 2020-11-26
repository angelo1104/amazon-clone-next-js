import React from "react";
import styles from './DashBoardMain.module.css';
import DashBoardMainCard from "./DashBoardMainCard/DashBoardMainCard";

function DashBoardMain() {
    return(
        <div className={styles.main_dashboard}>
            <DashBoardMainCard/>
        </div>
    )
}

export default DashBoardMain;