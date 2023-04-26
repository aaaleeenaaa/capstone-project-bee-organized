import Card from "./Card";
import styled from "styled-components";

const ListElement = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

export default function LocationList() {
  return (
    <ListElement>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ListElement>
  );
}
