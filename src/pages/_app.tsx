import GlobalStyles from "../styles/GlobalStyles";
import { ChallengesProvider } from '../contexts/ChallengesContext';
import React, { useState } from "react";


function MyApp({ Component, pageProps }) {


  return (

    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ChallengesProvider>

  );
}

export default MyApp
