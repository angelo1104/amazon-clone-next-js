import React, { useEffect, useState } from "react";
import styles from "./BecomeSellerForm.module.css";
import BecomeSellerPersonal from "./BecomeSellerPersonal/BecomeSellerPersonal";
import Link from "next/link";
import { useRouter } from "next/router";
import csc from "country-state-city";
import { useStateValue } from "../../../../../ContextApi/StateProvider";
import AuthFooter from "../../../../Auth/AuthFooter/AuthFooter";
import { Auth } from "aws-amplify";
import { setUser } from "../../../../../ContextApi/actions";

function BecomeSellerForm() {
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

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        if (!user) {
          //she is signed in
          router.replace("/seller/products/auth/sign-up");
        } else if (user.attributes["custom:seller"] === "true") {
          //she is a seller
          router.replace("/seller/products/dashboard");
        }
      })
      .catch((error) => {
        router.replace("/seller/products/auth/sign-up");
      });
  }, [user]);

  const businessLogic = async () => {
    setProcessing(true);
    setError("");

    try {
      //const user = await Auth.currentAuthenticatedUser();

      await Auth.updateUserAttributes(user, {
        name: `${firstName} ${lastName}`,
        "custom:country": countryName,
        "custom:state": region,
        "custom:city": city,
        "custom:zip": zip,
        address: address,
        "custom:seller": "true",
      });

      const newUser = await Auth.currentAuthenticatedUser();

      dispatch(setUser(newUser));
    } catch (error) {
      setError("We encountered an error.");
      console.log(error);
    } finally {
      setProcessing(false);
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
