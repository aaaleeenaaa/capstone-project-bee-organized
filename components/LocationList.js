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

export default function LocationList() {
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/locations");

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledList>
      {data.map((location) => (
        <Card location={location} key={location.index} />
      ))}
    </StyledList>
  );
}
