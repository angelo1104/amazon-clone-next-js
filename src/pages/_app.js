import "../../styles/globals.css";
import React from "react";
import { StateProvider } from "../ContextApi/StateProvider";
import reducer, { initialState } from "../ContextApi/reducers";
import Head from "next/head";
import AuthProvider from "../Components/Auth/AuthProvider/AuthProvider";
import "antd/dist/antd.css";
import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from "@stripe/react-stripe-js";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("../Components/TopProgressBar/TopProgressBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const stripePromise = loadStripe(
    "pk_test_51HRUplG7mYQXcjRQLgPD5Y9RtRiNYSqgfEEy8KezalgBXUNRMfpqnja5Ht0GHgOHpiZo5dobSXRuDMuGiZsU4fYf00iPpQBrTM"
  );

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Elements stripe={stripePromise}>
        <Head>
          <title>Create Next App</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,500&family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <AuthProvider>
          <TopProgressBar />

          <Component {...pageProps} />
        </AuthProvider>
      </Elements>
    </StateProvider>
  );
}

export default MyApp;

export async function getServerSideProps(ctx) {}
