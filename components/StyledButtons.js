import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";

const SubmitButton = styled.button`
  padding: 0.5em;
  width: 20%;
`;

const EditButton = styled.button`
  height: 1.7rem;
  width: 1.7rem;
  margin-left: 1rem;
`;

export default function StyledSubmitButton() {
  return <SubmitButton type="submit">Submit</SubmitButton>;
}

export function StyledEditButton({ onClick }) {
  return (
    <EditButton type="button" onClick={onClick} aria-label="edit">
      <FaRegEdit />
    </EditButton>
  );
}
