import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const FormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledSubmitButton = styled.button`
  padding: 0.5em;
  width: 20%;
`;

export default function Form({ onAddLocation }) {
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
        maxlength="30"
        minlength="3"
        required
      />
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </FormContainer>
  );
}
