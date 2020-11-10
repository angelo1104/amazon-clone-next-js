import React, {useEffect, useState} from "react";
import styles from './BecomeSellerPersonal.module.css';
import Link from "next/link";
import {CountryDropdown} from "react-country-region-selector";
import { Select } from 'antd';
import csc from 'country-state-city'

const { Option } = Select;

function BecomeSellerPersonal() {

    const [country, setCountry] = useState('')
    const [region, setRegion] = useState('')

    function onChange(value) {
        console.log(`selected ${value}`);
        setCountry(value)
    }

    function onBlur() {
        //console.log('blur');
    }

    function onFocus() {
        //console.log('focus');
    }

    function onSearch(val) {
        //console.log('search:', val);
    }

    function regionChange(val) {
        setRegion(val)
    }

    useEffect(()=>{
        console.log('This is country -->', country, 'This is state', region)
    }, [country, region])

    return(
        <div className={styles.become_seller_personal}>

            <Link href={'/seller/products'}>
                <img className={styles.amazon_logo}
                     src={'https://images-na.ssl-images-amazon.com/images/G/01/rainier/nav/SellerCentral_Bliss._CB485924389_.png'}
                     alt=""/>
            </Link>

            <form className={styles.become_seller_personal_form}>

                <h1 className={styles.seller_form_heading}>
                    Become Amazon Seller
                </h1>

                <div className={styles.input_div}>
                    <p className={styles.seller_label}>First Name</p>
                    <input className={styles.seller_input} type="text" />
                </div>

                <div className={styles.input_div}>
                    <p className={styles.seller_label}>Last Name</p>
                    <input className={styles.seller_input} type="text" />
                </div>

                <div className={styles.input_div}>
                    <p className={styles.seller_label}>Country</p>
                    <Select
                        className={styles.input_select}
                        showSearch
                        placeholder="Select a country"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            csc.getAllCountries().map(country=>{
                                return(
                                    <Option key={country.id} value={country.id}>{country.name}</Option>
                                )
                            })
                        }
                    </Select>
                </div>

                <div className={styles.input_div}>
                    {
                        country!=='' &&
                            <>
                                <p className={styles.seller_label}>State</p>
                        <Select
                            className={styles.input_select}
                            showSearch
                            placeholder="Select a state"
                            optionFilterProp="children"
                            onChange={regionChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                csc.getStatesOfCountry(country).map(state=>{
                                    return(
                                        <Option key={state.id} value={state.name}>{state.name}</Option>
                                    )
                                })
                            }
                        </Select>
                            </>
                    }

                    {
                        region!=='' &&
                            <div className={styles.input_div}>
                                <p className={styles.seller_label}>City</p>
                                <input className={styles.seller_input} type="text" name="" id="" />
                            </div>
                    }
                </div>

            </form>
        </div>
    )
}

export default BecomeSellerPersonal;