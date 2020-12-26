import React, {useState} from "react";
import DashBoardCreateProduct from "../DashBoardCreateProduct/DashBoardCreateProduct";
import DashBoardCreateProductImages from "../DashBoardCreateProductImages/DashBoardCreateProductImages";

function DashBoardCreateProductContainer() {
    const [page, setPage] = useState(1)

    switch (page) {
        case 1:
            return <DashBoardCreateProduct setPage={setPage}/>
        case 2:
            return <DashBoardCreateProductImages/>
        default:
            return <DashBoardCreateProduct/>
    }
}

export default DashBoardCreateProductContainer;