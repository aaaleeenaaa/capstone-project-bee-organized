import AddButton from "@/components/AddButton";
import LocationList from "@/components/LocationList";
import Card from "@/components/Card";
import useSWR from "swr";
import { useState } from "react";

export default function HomePage({ location }) {
  // const { data } = useSWR("/api/locations", { fallbackData: [] });

  return (
    <>
      <LocationList location={location} />

      <AddButton />
    </>
  );
}
