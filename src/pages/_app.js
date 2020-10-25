import '../../styles/globals.css'
import React from 'react'
import {StateProvider} from "../ContextApi/StateProvider";
import reducer, {initialState} from "../ContextApi/reducers";

function MyApp({ Component, pageProps }) {
  return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
      )
}

export default MyApp
