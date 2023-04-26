import styled from "styled-components";

const CardElement = styled.div`
  padding: 1em 3em;
  margin: 15px 0px;
  text-align: center;
  border: 3px grey solid;
  border-radius: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledListElement = styled.li`
  list-style-type: none;
`;

export default function Card() {
  return (
    <StyledListElement>
      <StyledLink href="#">
        <CardElement>Name of Location</CardElement>
      </StyledLink>
    </StyledListElement>
  );
}
