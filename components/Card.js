import styled from "styled-components";
import Link from "next/link";

const CardElement = styled.div`
  padding: 1em 3em;
  margin: 15px 0px;
  text-align: center;
  border: 3px grey solid;
  border-radius: 10px;
  width: 50em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledListElement = styled.li`
  list-style-type: none;
`;

export default function Card({ location }) {
  return (
    <StyledListElement>
      <StyledLink href="#">
        <CardElement h>
          <p>{location.location}</p>
        </CardElement>
      </StyledLink>
    </StyledListElement>
  );
}
