import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

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

const BackButton = styled.button`
  position: fixed;
  bottom: 100px;
  left: 10px;
`;

const SubmitButton = styled.button`
  padding: 0.5em;
  width: 20%;
`;

export default function StyledAddButton({ href }) {
  return (
    <Link href={href}>
      <AddButton type="button">+</AddButton>
    </Link>
  );
}

export function StyledBackButton({ onClick }) {
  const router = useRouter();
  return (
    <BackButton type="button" onClick={onClick}>
      ←
    </BackButton>
  );
}

export function StyledSubmitButton() {
  return <SubmitButton type="submit">Submit</SubmitButton>;
}
