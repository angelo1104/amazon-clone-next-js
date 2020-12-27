import React, {useState} from "react";
import DashBoardCreateProduct from "../DashBoardCreateProduct/DashBoardCreateProduct";
import DashBoardCreateProductImages from "../DashBoardCreateProductImages/DashBoardCreateProductImages";
import DashBoardCreateProductLegals from "../DashBoardCreateProductLegals/DashBoardCreateProductLegals";

function DashBoardCreateProductContainer() {
    const [page, setPage] = useState(1)

    switch (page) {
        case 1:
            return <DashBoardCreateProduct setPage={setPage}/>
        case 2:
            return <DashBoardCreateProductImages setPage={setPage}/>
        case 3:
            return <DashBoardCreateProductLegals setPage={setPage}/>
        default:
            return <DashBoardCreateProduct setPage={setPage}/>
    }
}

export default DashBoardCreateProductContainer;