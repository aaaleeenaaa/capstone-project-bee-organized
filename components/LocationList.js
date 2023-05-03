import LocationCard from "./LocationCard";
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
            <LocationCard location={location} />
          </StyledLink>
        );
      })}
    </StyledList>
  );
}
