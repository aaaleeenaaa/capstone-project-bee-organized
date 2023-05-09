import Card from "@/components/Card";
import { useRouter } from "next/router";
import Link from "next/link";
import StyledAddLink from "@/components/StyledAddLink";
import { StyledList } from "@/components/StyledList";
import StyledBackButton from "@/components/StyledBackButton";

export default function LocationDetailsPage({ locations, colonies }) {
  const router = useRouter();
  const { id } = router.query;
  const locationId = id;

  const currentLocation = locations.find((location) => location.id === id);

  const filteredColonies = colonies.filter(
    (colony) => colony.locationId === locationId
  );

  return (
    <>
      <Card text={currentLocation?.locationName} />
      <StyledList>
        {filteredColonies.map((colony) => {
          return (
            <Link href={`/colonydetail/${colony.id}`} key={colony.id}>
              <Card text={colony?.colonyName} />
            </Link>
          );
        })}
      </StyledList>

      <StyledAddLink href={`/locationdetail/addcolony/${id}`} />

      <StyledBackButton onClick={() => router.push("/")} />
    </>
  );
}
