import Card from "@/components/Card";
import { useRouter } from "next/router";

export default function LocationDetailsPage({ locations }) {
  const router = useRouter();
  const { id } = router.query;

  const result = locations.filter((location) => location.id === id);

  return (
    <>
      <Card location={location} />
    </>
  );
}
