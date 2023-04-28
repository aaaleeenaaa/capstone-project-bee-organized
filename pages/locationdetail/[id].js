import Card from "@/components/Card";
import { useRouter } from "next/router";

export default function LocationDetailsPage({ locations }) {
  const router = useRouter();
  const { id } = router.query;

  const result = locations[id];

  return (
    <>
      <Card location={result} />
    </>
  );
}
