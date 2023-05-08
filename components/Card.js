import styled from "styled-components";

export const CardElement = styled.article`
  padding: 1em 3em;
  margin: 15px 0px;
  text-align: center;
  border: 3px grey solid;
  border-radius: 10px;
`;

export const StyledListElement = styled.li`
  list-style-type: none;
`;

export default function Card({ text }) {
  return (
    <StyledListElement>
      <CardElement>
        <p>{text}</p>
      </CardElement>
    </StyledListElement>
  );
}
