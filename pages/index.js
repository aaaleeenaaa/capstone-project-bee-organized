import LocationList from "@/components/LocationList";
import StyledAddButton from "@/components/StyledButtons";

export default function HomePage({ locations }) {
  return (
    <>
      <LocationList locations={locations} />

      <StyledAddButton href={"/addlocation"} />
    </>
  );
}
