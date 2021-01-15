import React, {useEffect, useState} from "react";
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
import stripeInstance from "../../../axios/stripeInstance";
import {Dialog, IconButton, Slide} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import iosSpinner from "../../../lottie/ios-loader.json";
import Lottie from "lottie-react-web";

function Checkout() {
  const { Option } = Select;
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardHolderZip, setCardHolderZip] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('');

  const [error, setError] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");

  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator + item.amount * item.price;
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

  const getPaymentIntent = async ()=>{
    try {
      const {data} = await stripeInstance.post('/create-payment-intent',{
        price: totalAmount.toString()
      })

      setClientSecret(data.paymentIntent.client_secret);
      return data
    }catch (e) {
      setError("We encountered an error.")
    }
  }

  const placeOrder = async (event)=>{
    event.preventDefault();
    setProcessing(true);

    try {
      const {paymentIntent} = await getPaymentIntent();

      const {client_secret} = paymentIntent;

      const stripePayload = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details:{
            email: user.email,
            name: user.displayName,
            address:{
              postal_code: cardHolderZip
            }
          }
        },
        return_url: `${window.location.protocol}//${window.location.host}/payments/complete`
      },{
        handleActions: false
      })

      if (stripePayload.error){
        setProcessing(false);
        setError(stripePayload.error.message)
      }else {
        if (stripePayload.paymentIntent.status === "requires_action"){
          //do 3d secure
          setDialogOpen(true);
          setIframeUrl(stripePayload.paymentIntent.next_action.redirect_to_url.url)
        }else if (stripePayload.paymentIntent.status === "requires_payment_method"){
          //failed due to stupidity of user
          setError('Please check your card details')
          setProcessing(false)
        }else if (stripePayload.paymentIntent.status === "succeeded"){
          //success
          setSucceeded(true)
          //create order.
          setProcessing(false)
        }
      }

      console.log('payload', stripePayload)
    }catch (error){
      setError(error.message)
      setProcessing(false)
      console.log(error)
    }
  }

  const closeDialog = async (event)=>{
    setDialogOpen(false);

    //fetch payment intent and check its status.
    try {
      console.log('hi')
      const {paymentIntent} = await stripe.retrievePaymentIntent(clientSecret);

      console.log("result", paymentIntent);

      if (paymentIntent.status === "succeeded"){
        //success in 3d secure.
        setSucceeded(true);
        setProcessing(false);

        //create order
      }else if (paymentIntent.status === "requires_payment_method"){
        //failed because of stupidity of user
        setProcessing(false)
        setError("The provided information is not valid.")
      }else {
        //a fail idk reason
        setError("Payment failed. This can happen because of a cancel request.")
      }
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    console.log("processing", processing)
  },[processing])


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

          <p className={styles.error}>{error}</p>

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

          <input value={cardHolderZip} onChange={e=>setCardHolderZip(e.target.value)} placeholder={"Card holder's Zip"} type={"text"} className={styles.input}/>
          <button disabled={processing} style={{background: processing && '#ff9900b0'}} className={styles.place_order_button} onClick={placeOrder}>
            {processing ? <div className={styles.ios_spinner}><Lottie options={{animationData: iosSpinner}}/></div> : "Place order"}
          </button>
        </div>
      </div>

      <Dialog fullScreen={true} open={dialogOpen} >
        <IconButton onClick={closeDialog} className={styles.payment_close_button}>
          <CloseIcon/>
        </IconButton>
        <iframe className={styles.payment_iframe} src={iframeUrl} frameborder="0"></iframe>
      </Dialog>
    </div>
  );
}

export default Checkout;
