import AddButton from "@/components/AddButton";
import LocationList from "@/components/LocationList";

export default function HomePage({ locations }) {
  return (
    <>
      <LocationList locations={locations} />

      <AddButton />
    </>
  );
}
