import LocationCard from "./LocationCard";
import styled from "styled-components";
import Link from "next/link";
import { StyledList } from "./StyledList";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function LocationList({ locations }) {
  return (
    <StyledList>
      {locations.map((location, id) => {
        return (
          <StyledLink
            href={`/locationdetail/${id}`}
            key={id}
            locations={locations}
          >
            <LocationCard location={location} />
          </StyledLink>
        );
      })}
    </StyledList>
  );
}
