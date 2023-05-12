import React from "react";
import StyledSubmitButton from "./StyledButtons";
import { Label, Input, FormContainer } from "./StyledFormElements";

export default function Form({ onSubmit, formTopic, label }) {
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
