import Card from "@/components/Card";
import { useRouter } from "next/router";
import Link from "next/link";
import StyledAddLink, { StyledBackLink } from "@/components/StyledLinks";
import { StyledSection } from "@/components/StyledSections";
import { StyledRowSection } from "@/components/StyledSections";
import useLocalStorageState from "use-local-storage-state";
import { FormContainer, Label, Input } from "@/components/StyledFormElements";
import { StyledEditModal } from "@/components/StyledEditModal";
import { useState } from "react";
import { StyledEditDeleteButton } from "@/components/StyledButtons";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import {
  StyledQuestionCard,
  StyledQuestionLabel,
  StyledQuestionTextArea,
} from "@/components/StyledQuestionElements";

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

  const [formData, setFormData] = useLocalStorageState(
    `formData_${currentLocation?.id}`,
    { defaultValue: [] }
  );

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

  function handleDeleteClick(colonyToDelete) {
    setColonies(colonies.filter((colony) => colony.id !== colonyToDelete.id));
  }

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  }

  return (
    <>
      <StyledSection>
        <h2>{currentLocation?.locationName}</h2>

        <StyledQuestionCard padding="0.5rem 0" width="70%" margin="0 0 2rem 0">
          <StyledQuestionLabel htmlFor="generalNotesLocation">
            General notes about the location:
          </StyledQuestionLabel>
          <StyledQuestionTextArea
            id="generalNotesLocation"
            name="generalNotesLocation"
            type="text"
            rows="3"
            maxLength="100"
            minLength="3"
            value={formData.generalNotesLocation || ""}
            onChange={handleInputChange}
          />
        </StyledQuestionCard>

        {filteredColonies.map((colony) => {
          return (
            <StyledRowSection key={colony.id}>
              <Link href={`/colonydetail/${colony.id}`}>
                <Card text={colony?.colonyName} />
              </Link>
              <StyledEditDeleteButton
                onClick={() => handleEditClick(colony)}
                icon={FaRegEdit}
                ariaLabel={"edit"}
              />
              <StyledEditDeleteButton
                onClick={() => handleDeleteClick(colony)}
                icon={TiDelete}
                ariaLabel={"delete"}
                padding="0.2rem 0.5rem 0 0.3rem"
              />
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
