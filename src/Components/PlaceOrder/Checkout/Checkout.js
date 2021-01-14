import React, { useState } from "react";
import styles from "./Checkout.module.css";
import { useStateValue } from "../../../ContextApi/StateProvider";
import CartProduct from "../../Cart/CartProduct/CartProduct";
import Link from "next/link";
import csc from "country-state-city";
import { Select } from "antd";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

function Checkout() {
  const { Option } = Select;
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const [{ cart }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  const cardNumberStyle = {
    showIcon: true,
    style: {
      base: {
        color: "#111",
        fontFamily: "Inter, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "lightgray",
        },
        iconColor: "#F79B34",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const regionChange = (val) => {
    console.log("val", val);
    setRegion(val);
  };

  const onChange = (val) => {
    setCountry(val);
  };

  let cardNumberElement = <p>Error</p>;
  let cardExpiryElement = <p>Error</p>;
  let cardCvcElement = <p>Error</p>;

  try {
    cardNumberElement = <CardNumberElement options={cardNumberStyle} />;
    cardExpiryElement = <CardExpiryElement options={cardNumberStyle} />;
    cardCvcElement = <CardCvcElement options={cardNumberStyle} />;
  } catch (e) {
    console.log("Errory");
  }

  return (
    <div className={styles.checkout}>
      <Link href={"/"}>
        <a className={styles.continue_shopping}>{"<"} Continue Shopping</a>
      </Link>

      <h2 className={styles.title}>Checkout</h2>

      <div className={styles.form}>
        <div className={styles.form_left}>
          {cart.map((item, index) => (
            <CartProduct {...item} key={index} display={true} />
          ))}
        </div>

        <div className={styles.form_right}>
          <h3 className={styles.total_amount}>
            Total: {parseInt(totalAmount.toString())}
            <span className={styles.super_cents}>
              {(totalAmount + "").split(".")[1]}
            </span>
            $
          </h3>

          <h4 className={styles.address}>Delivery Address</h4>

          <Select
            className={styles.input_select}
            showSearch
            placeholder="Select a country"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {csc.getAllCountries().map((country) => {
              return (
                <Option key={country.id} value={country.id}>
                  {country.name}
                </Option>
              );
            })}
          </Select>

          <Select
            className={styles.input_select}
            showSearch
            placeholder="Select a state"
            optionFilterProp="children"
            onChange={regionChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {csc.getStatesOfCountry(country).map((state) => {
              return (
                <Option key={state.id} value={state.name}>
                  {state.name}
                </Option>
              );
            })}
          </Select>
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder={"City"}
            className={styles.input}
            type="text"
          />

          <input
            value={zip}
            onChange={(event) => setZip(event.target.value)}
            placeholder={"Zip"}
            className={styles.input}
            type="text"
          />

          <h4 className={styles.address}>Card Details</h4>

          {cardNumberElement}

          {cardExpiryElement}

          {cardCvcElement}

          <button className={styles.place_order_button}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
