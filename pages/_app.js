import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [locations, setLocations] = useState([]);
  const [colonies, setColonies] = useState([]);
  const [todos, setTodos] = useState([]);

  function handleAddLocation(newLocation) {
    setLocations([...locations, { ...newLocation, id: nanoid() }]);
  }

  function handleAddColony(newColony, locationId) {
    setColonies([
      ...colonies,
      { ...newColony, id: nanoid(), locationId: locationId },
    ]);
  }

  function handleAddTodo(newTodo) {
    setTodos([...todos, { ...newTodo, id: nanoid(), completed: false }]);
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          onAddLocation={handleAddLocation}
          locations={locations}
          onAddColony={handleAddColony}
          colonies={colonies}
          onAddTodo={handleAddTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </Layout>
    </>
  );
}
