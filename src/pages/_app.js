import '../../styles/globals.css'
import React, {useEffect} from 'react'
import {StateProvider} from "../ContextApi/StateProvider";
import reducer, {initialState} from "../ContextApi/reducers";
import Head from "next/head";
import firebase from "firebase";
import {firebaseConfig} from "../firebase";

function MyApp({ Component, pageProps }) {

    useEffect(()=>{
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(authUser=>{
            console.log(authUser)
        })
    },[])

  return (
      <StateProvider initialState={initialState} reducer={reducer}>
          <Head>
              <title>Create Next App</title>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,500&family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
          </Head>
              <Component {...pageProps} />
      </StateProvider>
      )
}

export default MyApp
