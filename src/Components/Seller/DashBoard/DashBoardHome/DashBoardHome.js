import React from "react";
import DashBoardHeader from "./DashBoardHeader/DashBoardHeader";
import DashBoardMain from "./DashBoardMain/DashBoardMain";
import DashBoardFooter from "./DashBoardFooter/DashBoardFooter";

function DashBoardHome() {

    return(
        <div>
            <DashBoardHeader/>
            <DashBoardMain/>
            <DashBoardFooter/>
        </div>
    )
}

export default DashBoardHome;