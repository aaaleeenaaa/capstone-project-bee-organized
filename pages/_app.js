import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [locations, setLocations] = useState([]);
  const [colonies, setColonies] = useState([]);
  const [todos, setTodos] = useState([]);

  function handleAddLocation(newLocation) {
    setLocations([...locations, { ...newLocation, id: nanoid() }]);
  }

  function handleAddColony(newColony) {
    setColonies([...colonies, { ...newColony, id: nanoid() }]);
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
