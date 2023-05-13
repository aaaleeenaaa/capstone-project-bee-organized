import LocationList from "@/components/LocationList";
import StyledAddLink from "@/components/StyledLinks";

export default function HomePage({ locations, setLocations }) {
  return (
    <>
      <LocationList locations={locations} setLocations={setLocations} />

      <StyledAddLink href={"/addlocation"} />
    </>
  );
}
