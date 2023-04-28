import styled from "styled-components";

const CardElement = styled.div`
  padding: 1em 3em;
  margin: 15px 0px;
  text-align: center;
  border: 3px grey solid;
  border-radius: 10px;
`;

const StyledListElement = styled.li`
  list-style-type: none;
`;

export default function LocationCard({ location, id }) {
  return (
    <StyledListElement>
      <CardElement id={id}>
        <p>{location.location}</p>
      </CardElement>
    </StyledListElement>
  );
}
