import React, {useEffect, useState} from "react";
import styles from './DashBoardCreateProduct.module.css';


function DashBoardCreateProduct() {
    const [features, setFeatures] = useState([''])

    const addFeature = (event)=>{
        event.preventDefault();

        setFeatures(prev => [...prev, '']);
    }

    const updateFeature = (event, index)=>{
        let featuresClone = [...features]

        featuresClone.forEach((feature, i)=>{
            if (i === index){
                featuresClone[index] = event.target.value
            }
        })

        setFeatures(featuresClone)
    }

    return(
        <div className={styles.dashboard_create_product}>
            <img className={styles.main_img} src={'https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2018/04/10095553/Amazon-seller-central.png'} alt=""/>

            <form className={styles.main_form}>
                <h2 className={styles.form_heading}>Create a new product</h2>

                <div className={styles.input_div}>
                    <p className={styles.form_input_label}>Name of Product</p>

                    <input className={styles.form_input} type="text" />
                </div>

                <div className={styles.input_div}>
                    <p className={styles.form_input_label}>Short Description</p>

                    <textarea className={styles.form_input} />

                    <p className={styles.input_words}>100/200</p>
                </div>

                <div className={styles.input_div}>
                    <p className={styles.form_input_label}>Description</p>

                    <textarea className={styles.form_input} />

                    <p className={styles.input_words}>200/300</p>
                </div>

                <div className={styles.input_div}>
                    <p className={styles.form_input_label}>Features</p>

                    {
                        features.map((item, index)=>{
                            return <input value={features[index]} onChange={(event)=>updateFeature(event, index)} className={styles.feature_input} type="text" key={index}/>
                        })
                    }

                    <button className={styles.add_feature} onClick={addFeature}><span className={styles.add_feature_plus}>+</span></button>
                </div>
            </form>
        </div>
    )
}

export default DashBoardCreateProduct;