import React, { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { globalStyle } from "@public/styles/GlobalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>챌린저스</title>
        <style>{globalStyle}</style>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
