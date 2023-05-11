import styled from "styled-components";
import Link from "next/link";

const AddLink = styled(Link)`
  background-color: #19c5fa;
  opacity: 65%;
  border: 1px grey solid;
  border-radius: 50%;
  position: fixed;
  bottom: 90px;
  right: 10px;
  padding: 0.5em 0.8em;
  font-size: 2em;
  text-decoration: none;
`;

const BackLink = styled(Link)`
  position: fixed;
  bottom: 100px;
  left: 10px;
`;

export default function StyledAddLink({ href }) {
  return (
    <AddLink href={href} aria-label="add to list">
      +
    </AddLink>
  );
}

export function StyledBackLink({ href }) {
  return (
    <BackLink href={href} aria-label="back to prior page">
      ←
    </BackLink>
  );
}