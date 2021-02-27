import GlobalStyles from "../styles/GlobalStyles";
import { ChallengesProvider } from '../contexts/ChallengesContext';
import React, { useState } from "react";
import { CountdownProvider } from "../contexts/CountdownContext";


function MyApp({ Component, pageProps }) {


  return (


    <ChallengesProvider>
      
        <Component {...pageProps} />
        <GlobalStyles />
      
    </ChallengesProvider>

  );
}

export default MyApp
