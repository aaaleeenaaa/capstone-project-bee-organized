import { useRouter } from "next/router";
import Card from "@/components/Card";
import ColonyQuestions from "@/components/ColonyQuestions";
import { StyledBackButton } from "@/components/StyledButtons";

export default function ColonyDetailsPage({ colonies }) {
  const router = useRouter();
  const id = router.query.id;

  const result = colonies.find((colony) => colony.id === id);

  return (
    <>
      <Card text={result?.colony} />
      <ColonyQuestions />
      <StyledBackButton onClick={() => router.back()}>←</StyledBackButton>
    </>
  );
}
