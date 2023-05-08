import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { StyledSubmitButton } from "./StyledButtons";

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

export default function Form({ onSubmit, formTopic, label }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor={formTopic}>{label}</Label>
      <Input
        id={formTopic}
        name={formTopic}
        type="text"
        maxLength="30"
        minLength="3"
        required
      />
      <StyledSubmitButton />
    </FormContainer>
  );
}
