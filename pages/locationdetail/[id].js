import LocationCard from "@/components/LocationCard";
import { useRouter } from "next/router";
import ColonyList from "@/components/ColonyList";

export default function LocationDetailsPage({ locations }) {
  const router = useRouter();
  const id = router.query.id;

  const result = locations.find((location) => location.id === id);

  return (
    <>
      <LocationCard location={result} />
      <ColonyList />
    </>
  );
}
