import LocationCard from "@/components/LocationCard";
import { useRouter } from "next/router";
import ColonyList from "@/components/ColonyList";
import StyledAddButton from "@/components/StyledAddButton";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  position: fixed;
  bottom: 100px;
  left: 10px;
`;

export default function LocationDetailsPage({ locations, colonies }) {
  const router = useRouter();
  const id = router.query.id;

  const result = locations.find((location) => location.id === id);

  return (
    <>
      <LocationCard location={result} />
      <ColonyList colonies={colonies} />
      <StyledLink href="/">←</StyledLink>
      <StyledAddButton href={"/addcolony"} />
    </>
  );
}
