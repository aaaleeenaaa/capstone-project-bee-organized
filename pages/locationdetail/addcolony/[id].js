import React from "react";
import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function AddColonyPage({ onAddColony }) {
  const router = useRouter();
  const { id: locationId } = router.query;

  function handleSubmit(data) {
    const renamedData = {
      colonyName: data.colony,
    };
    onAddColony(renamedData, locationId);
    router.push(`/locationdetail/${locationId}`);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      formTopic={"colony"}
      label={"Add a new colony:"}
      locationId={locationId}
    />
  );
}
