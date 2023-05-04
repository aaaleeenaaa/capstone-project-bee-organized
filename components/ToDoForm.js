import React from "react";
import { useRouter } from "next/router";
import {
  Label,
  Input,
  FormContainer,
  StyledSubmitButton,
} from "./LocationForm";

export default function ToDoForm({ onAddTodo }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const todoData = Object.fromEntries(formData);

    onAddTodo(todoData);
    router.push("/todolist");
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="todo">Add a new ToDo:</Label>
      <Input
        id="todo"
        name="todo"
        type="text"
        maxLength="30"
        minLength="3"
        required
      />
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </FormContainer>
  );
}
