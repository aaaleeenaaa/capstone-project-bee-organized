import styled from "styled-components";
import Link from "next/link";

const AddButton = styled.button`
  background-color: #19c5fa;
  opacity: 65%;
  border: 1px grey solid;
  border-radius: 50%;
  position: fixed;
  bottom: 90px;
  right: 10px;
  padding: 0.5em 0.8em;
  font-size: 2em;
`;

export default function StyledAddButton({ href }) {
  return (
    <Link href={href}>
      <AddButton type="button">+</AddButton>
    </Link>
  );
}
