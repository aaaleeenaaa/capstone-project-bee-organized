import Card from "./Card";
import styled from "styled-components";
import Link from "next/link";
import { StyledSection } from "@/pages/locationdetail/[id]";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function LocationList({ locations }) {
  return (
    <StyledSection>
      {locations.map((location) => {
        return (
          <StyledLink href={`/locationdetail/${location.id}`} key={location.id}>
            <Card text={location?.locationName} />
          </StyledLink>
        );
      })}
    </StyledSection>
  );
}
