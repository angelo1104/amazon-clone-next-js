import React, {useEffect, useState} from "react";
import styles from './SubHeader.module.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import axios from 'axios';
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import SubHeaderCard from "./SubHeaderCard/SubHeaderCard";

countries.registerLocale(english)

function SubHeader() {
    const [location,setLocation] = useState('')


    useEffect(()=>{
        axios.get('https://ipinfo.io?token=6c7df03daf5dcb')
            .then(response=>{
                const data = response.data

                const country = countries.getName(data.country, "en", {select: "official"})

                setLocation(country)
            })
            .catch(error=>{
                console.log(error)
            })
    },[])

    return(
        <div className={styles.sub_header}>

            <div className={styles.sub_header_desktop}>
                <div className={styles.header_location}>
                    <LocationOnOutlinedIcon/>

                    <div className={styles.header_location_address}>
                        <p className={styles.deliver_to}>
                            Deliver To
                        </p>
                        <p className={styles.header_location_country}>
                            {location}
                        </p>

                        <p className={styles.header_location_mobile}>
                            Deliver to {location}
                        </p>
                    </div>
                </div>

                <div className={styles.sub_header_cards}>
                    <SubHeaderCard title={"Today's deal"}/>
                    <SubHeaderCard title={"Customer Service"}/>
                    <SubHeaderCard title={"Gift Cards"}/>
                    <SubHeaderCard title={"Registry"}/>
                    <SubHeaderCard title={"Sell"} link={'/seller/products'}/>
                </div>

                <div className={styles.sub_header_amazon_response}>
                    <SubHeaderCard title={"Amazon's Response to COVID-19"}/>
                </div>
            </div>
            </div>
    )
}

export default SubHeader