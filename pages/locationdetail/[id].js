import Card from "@/components/Card";
import { useRouter } from "next/router";
import Link from "next/link";
import StyledAddLink from "@/components/StyledLinks";
import { StyledList } from "@/components/StyledList";
import { StyledBackLink } from "@/components/StyledLinks";

export default function LocationDetailsPage({ locations, colonies }) {
  const router = useRouter();
  const { id } = router.query;

  const currentLocation = locations.find((location) => location.id === id);

  const filteredColonies = colonies.filter(
    (colony) => colony.locationId === id
  );

  return (
    <>
      <StyledList>
        <Card text={currentLocation?.locationName} isBold={true} />
        {filteredColonies.map((colony) => {
          return (
            <Link href={`/colonydetail/${colony.id}`} key={colony.id}>
              <Card text={colony?.colonyName} />
            </Link>
          );
        })}
      </StyledList>

      <StyledAddLink href={`/locationdetail/addcolony/${id}`} />

      <StyledBackLink href={"/"} />
    </>
  );
}
