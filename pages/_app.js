import "../styles/globals.css";
import "../styles/fonts.css"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix | Enigma</title>
        <link rel="icon" type="image/x-icon" href="/data/icon.png"/>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
