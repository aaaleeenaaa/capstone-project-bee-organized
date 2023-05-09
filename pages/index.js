import LocationList from "@/components/LocationList";
import StyledAddLink from "@/components/StyledLinks";

export default function HomePage({ locations }) {
  return (
    <>
      <LocationList locations={locations} />

      <StyledAddLink href={"/addlocation"} />
    </>
  );
}
