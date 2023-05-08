import Card from "./Card";
import styled from "styled-components";
import Link from "next/link";
import { StyledList } from "./StyledList";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function LocationList({ locations }) {
  return (
    <StyledList>
      {locations.map((location) => {
        return (
          <StyledLink href={`/locationdetail/${location.id}`} key={location.id}>
            <Card text={location?.location} />
          </StyledLink>
        );
      })}
    </StyledList>
  );
}
