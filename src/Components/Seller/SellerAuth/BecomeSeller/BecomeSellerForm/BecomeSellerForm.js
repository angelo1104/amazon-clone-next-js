import React, { useEffect, useState } from "react";
import styles from "./BecomeSellerForm.module.css";
import BecomeSellerPersonal from "./BecomeSellerPersonal/BecomeSellerPersonal";
import Link from "next/link";
import { useRouter } from "next/router";
import csc from "country-state-city";
import { useStateValue } from "../../../../../ContextApi/StateProvider";
import authInstance from "../../../../../axios/authInstance";
import { auth } from "../../../../../firebase";
import { setDataUser } from "../../../../../ContextApi/actions";
import AuthFooter from "../../../../Auth/AuthFooter/AuthFooter";
import axios from "axios";

function BecomeSellerForm({ isUser }) {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [countryName, setCountryName] = useState("");

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setCountryName(csc.getCountryById(country).name);
  }, [country]);

  const [{ user, dataUser }, dispatch] = useStateValue();

  useEffect(() => {
    if (!user) {
      router.replace("/seller/products/sign-up");
    } else if (dataUser.seller) {
      router.replace("/seller/products/dashboard");
    }
  }, [user, dataUser]);

  const businessLogic = async () => {
    setProcessing(true);
    setError("");

    try {
      const sellerUser = await authInstance.put("/make/seller", {
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
      });

      await auth().currentUser.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      await dispatch(setDataUser(sellerUser.data));
      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      setError("We encountered an error.");
      console.log(error);
    }
  };

  return (
    <div className={styles.become_seller_form}>
      <Link href={"/seller/product"}>
        <img
          className={styles.amazon_logo}
          src={
            "https://images-na.ssl-images-amazon.com/images/G/01/rainier/nav/SellerCentral_Bliss._CB485924389_.png"
          }
          alt=""
        />
      </Link>

      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles.become_seller_personal_form}
      >
        <h1 className={styles.seller_form_heading}>Become Amazon Seller</h1>

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
          processing={processing}
          error={error}
        />
      </form>

      <AuthFooter />
    </div>
  );
}

export default BecomeSellerForm;
