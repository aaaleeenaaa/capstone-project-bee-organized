import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [locations, setLocations] = useLocalStorageState("locations", {
    defaultValue: [],
  });

  const [colonies, setColonies] = useLocalStorageState("colonies", {
    defaultValue: [],
  });

  const [todos, setTodos] = useLocalStorageState("todos", { defaultValue: [] });

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
          setLocations={setLocations}
          setColonies={setColonies}
        />
      </Layout>
    </>
  );
}
