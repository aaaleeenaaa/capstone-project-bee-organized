import Card from "./Card";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

export default function LocationList({ locations }) {
  return (
    <StyledList>
      {locations.map((location, index) => (
        <Card location={location} key={index} />
      ))}
    </StyledList>
  );
}
