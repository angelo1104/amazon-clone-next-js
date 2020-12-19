import React from "react";
import styles from './DashBoardCreateProduct.module.css';

function DashBoardCreateProduct() {
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
            </form>
        </div>
    )
}

export default DashBoardCreateProduct;