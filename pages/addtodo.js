import React from "react";
import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function AddToDoPage({ onAddTodo }) {
  const router = useRouter();

  function handleSubmit(data) {
    onAddTodo(data);
    router.push("/todolist");
  }

  return (
    <Form
      onSubmit={handleSubmit}
      formTopic={"todo"}
      label={"Add a new ToDo:"}
    />
  );
}
