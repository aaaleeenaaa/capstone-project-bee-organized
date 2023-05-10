import { useRouter } from "next/router";
import Card from "@/components/Card";
import ColonyQuestions from "@/components/ColonyQuestions";
import { StyledBackLink } from "@/components/StyledLinks";
import { StyledSection } from "../locationdetail/[id]";

export default function ColonyDetailsPage({ colonies }) {
  const router = useRouter();
  const id = router.query.id;

  const currentColony = colonies.find((colony) => colony.id === id);

  return (
    <>
      <StyledSection>
        <Card text={currentColony?.colonyName} isBold={true} />
        <ColonyQuestions currentColony={currentColony} />
      </StyledSection>
      <StyledBackLink href={`/locationdetail/${currentColony?.locationId}`} />
    </>
  );
}
