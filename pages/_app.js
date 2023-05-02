import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [locations, setLocations] = useState([]);

  function handleAddLocation(newLocation) {
    setLocations([...locations, newLocation]);
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          onAddLocation={handleAddLocation}
          locations={locations}
        />
      </Layout>
    </>
  );
}
