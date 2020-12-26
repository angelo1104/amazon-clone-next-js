import React from "react";
import styles from './ImageTag.module.css';

function ImageTag({backgroundUrl, index, removeUrl}) {
    const imageStyle = {
        background: `url('${backgroundUrl}')`
    }

    const removeImage = (event)=>{
        event.preventDefault();

        removeUrl(index)
    }

    return(
        <div className={styles.container}>
            <div className={styles.overlay}>
                <button onClick={removeImage} className={styles.remove_button}>
                    Remove
                </button>
            </div>
            <div className={styles.image} style={imageStyle}>

            </div>
        </div>
    )
}

export default ImageTag