import React from "react";
import { StyledSubmitButton } from "./StyledButtons";
import {
  StyledLabel,
  StyledInput,
  StyledFormContainer,
} from "./StyledFormElements";

export default function Form({ onSubmit, formTopic, label }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }

  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      <StyledLabel htmlFor={formTopic}>{label}</StyledLabel>
      <StyledInput
        id={formTopic}
        name={formTopic}
        type="text"
        maxLength="25"
        minLength="3"
        required
      />
      <StyledSubmitButton />
    </StyledFormContainer>
  );
}
