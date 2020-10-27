import React, {useEffect, useState} from "react";
import styles from './HeaderSearch.module.css'
import {Select, MenuItem} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function HeaderSearch() {

    const [selectedValue,setSelectedValue] = useState('All')
    const [placeHolder,setPlaceHolder] = useState('');

    useEffect(()=>{
        if (window.outerWidth <= 450){
            setPlaceHolder('Search Amazon')
        }
    },[])

    function handleChange(value) {
        setSelectedValue(value)
        console.log(`selected ${value}`);
    }

    return (
        <div className={styles.header_search}>
            <Select className={styles.header_search_select} value={selectedValue} onChange={handleChange}>
                <MenuItem value={'All'}>All</MenuItem>
            </Select>

            <input type="text" className={styles.header_input_search} placeholder={placeHolder}/>
            <SearchIcon className={styles.header_search_logo}/>
        </div>
    )
}

export default HeaderSearch