import React from "react";
import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function AddLocationPage({ onAddLocation }) {
  const router = useRouter();

  function handleSubmit(data) {
    onAddLocation(data);
    router.push("/");
  }

  return (
    <Form
      onSubmit={handleSubmit}
      formTopic={"location"}
      label={"Add a new location:"}
    />
  );
}
