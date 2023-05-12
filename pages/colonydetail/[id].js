import { useRouter } from "next/router";
import ColonyQuestions from "@/components/ColonyQuestions";
import { StyledBackLink } from "@/components/StyledLinks";
import { StyledSection } from "@/components/StyledSections";

export default function ColonyDetailsPage({ colonies }) {
  const router = useRouter();
  const id = router.query.id;

  const currentColony = colonies.find((colony) => colony.id === id);

  return (
    <>
      <StyledSection>
        <h2>{currentColony?.colonyName}</h2>
        <ColonyQuestions currentColony={currentColony} />
      </StyledSection>
      <StyledBackLink href={`/locationdetail/${currentColony?.locationId}`} />
    </>
  );
}
