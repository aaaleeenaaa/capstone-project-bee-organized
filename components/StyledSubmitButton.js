import styled from "styled-components";

const SubmitButton = styled.button`
  padding: 0.5em;
  width: 20%;
`;

export default function StyledSubmitButton() {
  return <SubmitButton type="submit">Submit</SubmitButton>;
}
