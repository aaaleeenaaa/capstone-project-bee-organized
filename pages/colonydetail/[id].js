import { useRouter } from "next/router";
import Card from "@/components/Card";
import ColonyQuestions from "@/components/ColonyQuestions";
import { StyledBackLink } from "@/components/StyledLinks";
import { StyledList } from "@/components/StyledList";

export default function ColonyDetailsPage({ colonies }) {
  const router = useRouter();
  const id = router.query.id;

  const currentColony = colonies.find((colony) => colony.id === id);

  return (
    <>
      <StyledList>
        <Card text={currentColony?.colonyName} isBold={true} />
        <ColonyQuestions currentColony={currentColony} />
      </StyledList>
      <StyledBackLink href={`/locationdetail/${currentColony?.locationId}`} />
    </>
  );
}
