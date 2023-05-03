import React from "react";
import Form from "@/components/LocationForm";

export default function AddLocationPage({ onAddLocation }) {
  return <Form onAddLocation={onAddLocation} />;
}
