import LocationCard from "./LocationCard";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledList } from "./StyledList";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function LocationList({ locations }) {
  const router = useRouter();

  return (
    <StyledList>
      {console.log(locations)}
      {locations.map((location, id) => (
        <StyledLink
          href={`/locationdetail/${id}`}
          key={id}
          locations={locations}
        >
          <LocationCard location={location} />
        </StyledLink>
      ))}
    </StyledList>
  );
}
