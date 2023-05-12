import styled from "styled-components";

export const CardElement = styled.article`
  padding: 1em 3em;
  margin: 15px 0px;
  text-align: center;
  border: 3px grey solid;
  border-radius: 10px;
  width: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Card({ text }) {
  return (
    <>
      <CardElement>
        <p>{text}</p>
      </CardElement>
    </>
  );
}
