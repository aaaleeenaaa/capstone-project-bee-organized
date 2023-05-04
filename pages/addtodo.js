import React from "react";
import ToDoForm from "@/components/ToDoForm";

export default function AddToDoPage({ onAddTodo }) {
  return <ToDoForm onAddTodo={onAddTodo} />;
}
