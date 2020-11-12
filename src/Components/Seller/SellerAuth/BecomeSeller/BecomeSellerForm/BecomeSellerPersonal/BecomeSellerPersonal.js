import React, {useEffect, useState} from "react";
import styles from './BecomeSellerPersonal.module.css';
import { Select } from 'antd';
import csc from 'country-state-city'

const { Option } = Select;

function BecomeSellerPersonal({businessLogic, country, setCountry, region, setRegion, firstName, setFirstName, lastName, setLastName, city, setCity, zip, setZip}) {

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

    const moveToNext = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            const inputs =
                Array.prototype.slice.call(document.querySelectorAll("input"))
            const index =
                (inputs.indexOf(document.activeElement) + 1) % inputs.length
            const input = inputs[index]
            input.focus()
            input.select()
        }
    }

    return(
        <div className={styles.become_seller_personal}>
                <div className={styles.input_div}>
                    <p className={styles.seller_label}>First Name</p>
                    <input onKeyDown={moveToNext} className={styles.seller_input} type="text" value={firstName} onChange={e=> setFirstName(e.target.value)} />
                </div>

                <div className={styles.input_div}>
                    <p className={styles.seller_label}>Last Name</p>
                    <input onKeyDown={moveToNext} className={styles.seller_input} type="text" value={lastName} onChange={e=> setLastName(e.target.value)} />
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
                        onKeyDown={e=> e.preventDefault()}
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
                            onKeyDown={e=>e.preventDefault()}
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
                            <div>
                                <div className={styles.input_div}>
                                    <p className={styles.seller_label}>City</p>
                                    <input onKeyDown={moveToNext} className={styles.seller_input} type="text" name="" id="" value={city} onChange={e=> setCity(e.target.value)}/>
                                </div>

                                <div className={styles.input_div}>
                                    <p className={styles.seller_label}>Zip</p>
                                    <input className={styles.seller_input} type="text" name="" id="" value={zip} onChange={e=> setZip(e.target.value)}/>
                                </div>
                            </div>
                    }
                </div>

                <button onClick={e=>{
                    e.preventDefault();
                    businessLogic();
                }} type="submit" className={styles.continue_button}>Continue</button>
            </div>
    )
}

export default BecomeSellerPersonal;