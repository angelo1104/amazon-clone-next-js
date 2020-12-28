import React, {useEffect, useState} from "react";
import DashBoardCreateProduct from "../DashBoardCreateProduct/DashBoardCreateProduct";
import DashBoardCreateProductImages from "../DashBoardCreateProductImages/DashBoardCreateProductImages";
import DashBoardCreateProductLegals from "../DashBoardCreateProductLegals/DashBoardCreateProductLegals";
import {useProductValue} from "../../../../../../ContextApi/ProductProvider";
import {setFormPage, setVillage} from "../../../../../../ContextApi/productsActions";

function DashBoardCreateProductContainer() {

    const [{village, page}, dispatch] = useProductValue()

    const setPage = (pageNumber)=>{
        dispatch(setFormPage(pageNumber))
    }

    useEffect(()=>{
        dispatch(setVillage('barley'))
    },[])

    useEffect(()=>{
        console.log(village)
    },[village])

    switch (page) {
        case 1:
            return <DashBoardCreateProduct setPage={setPage} />
        case 2:
            return <DashBoardCreateProductImages setPage={setPage} page={page}/>
        case 3:
            return <DashBoardCreateProductLegals setPage={setPage} page={page}/>
        default:
            return <DashBoardCreateProduct setPage={setPage} />
    }
}

export default DashBoardCreateProductContainer;