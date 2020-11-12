import React, {useState} from "react";
import BecomeSellerPersonal from "./BecomeSellerPersonal/BecomeSellerPersonal";

function SwitchForm() {
    const [step, setStep] = useState(1);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const businessLogic = (event)=>{

    }

    switch (step) {
        case 1:
            return <BecomeSellerPersonal businessLogic={businessLogic()} firstName={firstName} lastName={lastName} city={city} country={country} region={region} zip={zip} setCity={setCity} setCountry={setCountry} setFirstName={setFirstName} setLastName={setLastName} setRegion={setRegion} setZip={setZip}/>
        default:
            return <div>Jello</div>
    }
}

export default SwitchForm;