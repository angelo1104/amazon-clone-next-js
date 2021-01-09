import React, { useEffect, useState } from "react";
import BecomeSellerPersonal from "./BecomeSellerPersonal/BecomeSellerPersonal";
import authInstance from "../../../../../axios/authInstance";
import { useStateValue } from "../../../../../ContextApi/StateProvider";
import csc from "country-state-city";
import { auth } from "../../../../../firebase";
import { setDataUser } from "../../../../../ContextApi/actions";
import { useRouter } from "next/router";

function SwitchForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    setCountryName(csc.getCountryById(country).name);
  }, [country]);

  const [{ user, dataUser }, dispatch] = useStateValue();

  useEffect(() => {
    if (!user) {
      router.replace("/seller/product/sin-up");
    } else if (dataUser.seller) {
      router.replace("/seller/product/dashboard");
    }
  }, [user, dataUser]);

  const businessLogic = () => {
    authInstance
      .put("/make/seller", {
        sellerFilter: {
          email: user.email,
          uid: user.uid,
        },
        sellerData: {
          name: `${firstName} ${lastName}`,
          country: countryName,
          state: region,
          city: city,
          address: address,
          zip: zip,
        },
      })
      .then((sellerUser) => {
        auth().currentUser.updateProfile({
          displayName: `${firstName} ${lastName}`,
        });
        dispatch(setDataUser(sellerUser.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (step) {
    case 1:
      return (
        <BecomeSellerPersonal
          address={address}
          setAddress={setAddress}
          businessLogic={businessLogic}
          firstName={firstName}
          lastName={lastName}
          city={city}
          country={country}
          region={region}
          zip={zip}
          setCity={setCity}
          setCountry={setCountry}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setRegion={setRegion}
          setZip={setZip}
        />
      );
    default:
      return <div>Jello</div>;
  }
}

export default SwitchForm;
