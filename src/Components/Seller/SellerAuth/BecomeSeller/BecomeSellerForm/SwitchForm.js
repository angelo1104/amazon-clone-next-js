import React, {useEffect, useState} from "react";
import BecomeSellerPersonal from "./BecomeSellerPersonal/BecomeSellerPersonal";
import authInstance from "../../../../../axios/authInstance";
import {useStateValue} from "../../../../../ContextApi/StateProvider";
import csc from 'country-state-city'

function SwitchForm() {
    const [step, setStep] = useState(1);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [address, setAddress] = useState('')
    const [countryName, setCountryName] = useState('');

    useEffect(()=>{
        setCountryName(csc.getCountryById(country).name)
    },[country])

    const [{user}] = useStateValue()

    const businessLogic = ()=>{
        authInstance.put('/make/seller',{
            sellerFilter:{
                email: user.email,
                uid: user.uid
            },
            sellerData:{
                name: `${firstName} ${lastName}`,
                country: countryName,
                state: region,
                city: city,
                address: address,
                zip: zip,
            }
        }).then(sellerUser=>{
            console.log(sellerUser)
        })
            .catch(error=>{
                console.log(error)
            })
    }

    switch (step) {
        case 1:
            return <BecomeSellerPersonal address={address} setAddress={setAddress} businessLogic={businessLogic} firstName={firstName} lastName={lastName} city={city} country={country} region={region} zip={zip} setCity={setCity} setCountry={setCountry} setFirstName={setFirstName} setLastName={setLastName} setRegion={setRegion} setZip={setZip}/>
        default:
            return <div>Jello</div>
    }
}

export default SwitchForm;