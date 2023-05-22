import { CardElement } from "./StyledSections";

export default function Card({ text }) {
  return (
    <CardElement>
      <p>{text}</p>
    </CardElement>
  );
}
