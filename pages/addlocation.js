import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import Form from "@/components/Form";
import LocationList from "@/components/LocationList";
import { useState } from "react";

// async function sendRequest(url, { arg }) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(arg),
//   });

//   const { status } = await response.json();
//   console.log(status);
// }

export default function AddLocationPage() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  function handleAddLocation(newLocation) {
    setLocation(newLocation);
  }

  return <Form onAddLocation={handleAddLocation} location={location} />;
}
