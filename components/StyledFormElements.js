import styled from "styled-components";

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  flex-grow: 1;
  margin-bottom: 55px;
`;
