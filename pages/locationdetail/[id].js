import Card from "@/components/Card";
import { useRouter } from "next/router";
import Link from "next/link";
import StyledAddButton, { StyledBackButton } from "@/components/StyledButtons";
import { StyledList } from "@/components/StyledList";

export default function LocationDetailsPage({ locations, colonies }) {
  const router = useRouter();
  const { id } = router.query;
  const locationId = id;

  const result = locations.find((location) => location.id === id);

  const filteredColonies = colonies.filter(
    (colony) => colony.locationId === locationId
  );

  return (
    <>
      <Card text={result?.location} />
      <StyledList>
        {filteredColonies.map((colony) => {
          return (
            <Link href={`/colonydetail/${colony.id}`} key={colony.id}>
              <Card text={colony?.colony} />
            </Link>
          );
        })}
      </StyledList>

      <StyledAddButton href={`/locationdetail/addcolony/${id}`} />

      <StyledBackButton onClick={() => router.push("/")}>←</StyledBackButton>
    </>
  );
}
