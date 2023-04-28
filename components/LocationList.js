import Card from "./Card";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

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
          <Card location={location} />
        </StyledLink>
      ))}
    </StyledList>
  );
}
