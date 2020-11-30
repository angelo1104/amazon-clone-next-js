import React, {useEffect} from "react";
import styles from './HeaderSearch.module.css';

function Hit({displayText, selectedItem, index, setValue}) {


    useEffect(()=>{
        if (selectedItem===(index+1)){
            //if selected
            setValue(displayText)
        }
    },[selectedItem,index,setValue,displayText])

    return(
        <div className={selectedItem===(index+1)? styles.hitSelect: styles.hit} key={index}>
            <p className={styles.hit_text}>{displayText}</p>
        </div>
    )
}

export default Hit;