import LocationList from "@/components/LocationList";
import StyledAddButton from "@/components/StyledAddButton";

export default function HomePage({ locations, id }) {
  return (
    <>
      <LocationList locations={locations} id={id} />

      <StyledAddButton />
    </>
  );
}
