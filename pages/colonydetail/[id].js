import { useRouter } from "next/router";
import Card from "@/components/Card";
import ColonyQuestions from "@/components/ColonyQuestions";
import { StyledBackLink } from "@/components/StyledLinks";

export default function ColonyDetailsPage({ colonies }) {
  const router = useRouter();
  const id = router.query.id;

  const currentColony = colonies.find((colony) => colony.id === id);

  return (
    <>
      <Card text={currentColony?.colonyName} />
      <ColonyQuestions />
      <StyledBackLink href={`/locationdetail/${currentColony.locationId}`} />
    </>
  );
}
