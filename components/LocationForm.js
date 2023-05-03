import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

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
`;

export const StyledSubmitButton = styled.button`
  padding: 0.5em;
  width: 20%;
`;

export default function LocationForm({ onAddLocation }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const locationData = Object.fromEntries(formData);

    onAddLocation(locationData);
    router.push("/");
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="location">Add a new location</Label>
      <Input
        id="location"
        name="location"
        type="text"
        maxLength="30"
        minLength="3"
        required
      />
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </FormContainer>
  );
}
