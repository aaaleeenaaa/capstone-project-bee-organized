import { CardElement, StyledListElement } from "./LocationCard";

export default function ColonyCard({ colony }) {
  return (
    <StyledListElement>
      <CardElement>
        <p>{colony?.colony}</p>
      </CardElement>
    </StyledListElement>
  );
}
