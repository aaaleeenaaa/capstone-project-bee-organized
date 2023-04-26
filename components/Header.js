import styled from "styled-components";

const Headline = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0.5em 1em;
  text-align: center;
  border: 3px solid black;
  font-size: 2em;
  font-weight: bold;
  background-color: #e3de4f;
  z-index: 1;
`;

export default function Header() {
  return <Headline>Bee organized</Headline>;
}
