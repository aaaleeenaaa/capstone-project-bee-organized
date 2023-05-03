import React from "react";
import { useRouter } from "next/router";
import {
  Label,
  Input,
  FormContainer,
  StyledSubmitButton,
} from "./LocationForm";

export default function ColonyForm({ onAddColony }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const colonyData = Object.fromEntries(formData);

    onAddColony(colonyData);
    router.back();
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="colony">Add a new colony</Label>
      <Input
        id="colony"
        name="colony"
        type="text"
        maxLength="30"
        minLength="3"
        required
      />
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </FormContainer>
  );
}
