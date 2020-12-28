import React, {useEffect, useState} from "react";
import DashBoardCreateProduct from "../DashBoardCreateProduct/DashBoardCreateProduct";
import DashBoardCreateProductImages from "../DashBoardCreateProductImages/DashBoardCreateProductImages";
import DashBoardCreateProductLegals from "../DashBoardCreateProductLegals/DashBoardCreateProductLegals";
import {useProductValue} from "../../../../../../ContextApi/ProductProvider";
import {setVillage} from "../../../../../../ContextApi/productsActions";

function DashBoardCreateProductContainer() {
    const [page, setPage] = useState(1)

    const [state, dispatch] = useProductValue()

    useEffect(()=>{
        dispatch(setVillage('barley'))
    },[])

    useEffect(()=>{
        console.log(state)
    },[state])

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