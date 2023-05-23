import { StyledCardElement } from "./StyledCardElement";

export default function Card({ text }) {
  return (
    <StyledCardElement>
      <p>{text}</p>
    </StyledCardElement>
  );
}
