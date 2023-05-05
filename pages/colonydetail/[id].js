import { useRouter } from "next/router";
import ColonyCard from "@/components/ColonyCard";
import ColonyQuestions from "@/components/ColonyQuestions";
import { StyledLink } from "../locationdetail/[id]";

export default function ColonyDetailsPage({ colonies }) {
  const router = useRouter();
  const id = router.query.id;

  const result = colonies.find((colony) => colony.id === id);

  return (
    <>
      <ColonyCard colony={result} />
      <ColonyQuestions />
      <StyledLink href={`/locationdetail/${id}`}>←</StyledLink>
    </>
  );
}
