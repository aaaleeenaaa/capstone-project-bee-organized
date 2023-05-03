import styled from "styled-components";

const CardElement = styled.article`
  padding: 1em 3em;
  margin: 15px 0px;
  text-align: center;
  border: 3px grey solid;
  border-radius: 10px;
`;

const StyledListElement = styled.li`
  list-style-type: none;
`;

export default function LocationCard({ location }) {
  if (!location) {
    return null;
  }

  return (
    <StyledListElement>
      <CardElement>
        <p>{location?.location}</p>
      </CardElement>
    </StyledListElement>
  );
}
