import LocationList from "@/components/LocationList";
import { StyledLink } from "@/components/StyledLinks";

export default function HomePage({ locations, setLocations }) {
  return (
    <>
      <LocationList locations={locations} setLocations={setLocations} />

      <StyledLink href={"/addlocation"} marginleft="17rem">
        Add location
      </StyledLink>
    </>
  );
}
