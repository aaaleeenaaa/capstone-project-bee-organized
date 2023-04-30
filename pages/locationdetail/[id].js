import LocationCard from "@/components/LocationCard";
import { useRouter } from "next/router";
import ColonyList from "@/components/ColonyList";

export default function LocationDetailsPage({ locations }) {
  const router = useRouter();
  const id = router.query.id;

  // if (!id || !locations[id]) {
  //   return <div>Loading...</div>;

  const result = locations[id];
  //const result = locations.filter((location) => location.id === id);
  //console.log("result:", result);
  // console.log("id:", id);
  // console.log("locations:", locations);

  return (
    <>
      <LocationCard location={result} />
      <ColonyList />
    </>
  );
}

// <LocationCard location={result} id={id} />
