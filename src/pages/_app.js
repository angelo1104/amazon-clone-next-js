import '../../styles/globals.css'
import React from 'react'
import {StateProvider} from "../ContextApi/StateProvider";
import reducer, {initialState} from "../ContextApi/reducers";
import Head from "next/head";
import AuthProvider from "../Components/Auth/AuthProvider/AuthProvider";
import 'antd/dist/antd.css';


function MyApp({ Component, pageProps }) {

  return (
      <StateProvider initialState={initialState} reducer={reducer}>
          <Head>
              <title>Create Next App</title>
              <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,500&family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
          </Head>
          <AuthProvider>
              <Component {...pageProps} />
          </AuthProvider>
      </StateProvider>
      )
}

export default MyApp
