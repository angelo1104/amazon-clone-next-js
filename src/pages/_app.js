import "../../styles/globals.css";
import React, { useEffect } from "react";
import { StateProvider } from "../ContextApi/StateProvider";
import reducer, { initialState } from "../ContextApi/reducers";
import Head from "next/head";
import AuthProvider from "../Components/Auth/AuthProvider/AuthProvider";
import "antd/dist/antd.css";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
import Amplify from "aws-amplify";
import config from "../aws-exports";

Amplify.configure({
  ...config,
  ssr: true,
});

const TopProgressBar = dynamic(
  () => {
    return import("../Components/TopProgressBar/TopProgressBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
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
    </StateProvider>
  );
}

export default MyApp;

export async function getServerSideProps(ctx) {}
