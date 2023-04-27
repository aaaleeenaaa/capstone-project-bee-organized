import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  //const [location, setLocation] = useState("");

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
