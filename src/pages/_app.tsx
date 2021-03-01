import GlobalStyles from "../styles/GlobalStyles";
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {


  return (


    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>


  );
}

export default MyApp
