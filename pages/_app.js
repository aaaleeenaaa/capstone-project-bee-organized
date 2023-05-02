import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [locations, setLocations] = useState([]);

  function handleAddLocation(newLocation) {
    setLocations([...locations, { ...newLocation, id: nanoid() }]);
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
