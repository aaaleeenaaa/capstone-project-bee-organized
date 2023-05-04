import React from "react";
import LocationForm from "@/components/LocationForm";

export default function AddLocationPage({ onAddLocation }) {
  return <LocationForm onAddLocation={onAddLocation} />;
}
