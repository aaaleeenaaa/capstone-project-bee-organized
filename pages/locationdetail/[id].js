import Card from "@/components/Card";
import { useRouter } from "next/router";
import Link from "next/link";
import StyledAddLink, { StyledBackLink } from "@/components/StyledLinks";
import { StyledSection } from "@/components/StyledSections";
import { StyledRowSection } from "@/components/StyledSections";
import { StyledEditButton } from "@/components/StyledButtons";
import useLocalStorageState from "use-local-storage-state";
import { FormContainer, Label, Input } from "@/components/StyledFormElements";
import { StyledEditModal } from "@/components/StyledEditModal";
import { useState } from "react";

export default function LocationDetailsPage({
  locations,
  colonies,
  setColonies,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentLocation = locations.find((location) => location.id === id);

  const filteredColonies = colonies.filter(
    (colony) => colony.locationId === id
  );

  const [showModal, setShowModal] = useLocalStorageState("showModal", {
    defaultValue: false,
  });

  const [editingColony, setEditingColony] = useState(null);

  function handleEditClick(colony) {
    setEditingColony(colony);
    setShowModal(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setColonies(
      colonies.map((colony) => {
        return colony.id === editingColony.id
          ? { ...colony, colonyName: event.target.colonyName.value }
          : colony;
      })
    );

    setShowModal(false);
  }

  return (
    <>
      <StyledSection>
        <h2>{currentLocation?.locationName}</h2>
        {filteredColonies.map((colony) => {
          return (
            <StyledRowSection key={colony.id}>
              <Link href={`/colonydetail/${colony.id}`}>
                <Card text={colony?.colonyName} />
              </Link>
              <StyledEditButton onClick={() => handleEditClick(colony)} />
            </StyledRowSection>
          );
        })}

        <StyledEditModal isOpen={showModal}>
          <FormContainer onSubmit={handleSubmit}>
            <Label>
              Edit Colony: {""}
              <Input
                type="text"
                name="colonyName"
                defaultValue={editingColony?.colonyName || ""}
                maxLength="30"
                minLength="3"
                required
              />
            </Label>
            <button type="submit">Save</button>
            <button onClick={() => setShowModal(false)} type="button">
              Cancel
            </button>
          </FormContainer>
        </StyledEditModal>
      </StyledSection>
      <StyledAddLink href={`/locationdetail/addcolony/${id}`} />

      <StyledBackLink href={"/"} />
    </>
  );
}
