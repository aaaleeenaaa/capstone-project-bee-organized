import Card from "./Card";
import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

export default function LocationList({ locations }) {
  // const router = useRouter();
  // const { data, isLoading } = useSWR("/api/locations");

  // if (!data) return;

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  console.log(locations);

  return (
    <StyledList>
      {locations.map((location, index) => (
        <Card location={location} key={index} />
      ))}
    </StyledList>
  );
}
