import { useRouter } from "next/router";
import { StyledBackLink, StyledLink } from "@/components/StyledLinks";
import { CardElement, StyledSection } from "@/components/StyledSections";
import { StyledRowSection } from "@/components/StyledSections";
import useLocalStorageState from "use-local-storage-state";
import { FormContainer, Label, Input } from "@/components/StyledFormElements";
import { StyledEditModal } from "@/components/StyledEditModal";
import { useState } from "react";
import { StyledEditDeleteButton } from "@/components/StyledButtons";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import GeneralNotes from "@/components/GeneralNotes";
import {
  StyledLabel,
  StyledTextArea,
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
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <>
      <StyledSection>
        <h2>{currentLocation?.locationName}</h2>

        <GeneralNotes
          padding="0.5rem 0"
          width="70%"
          margin="0 0 2rem 0"
          isLocation={true}
          currentLocation={currentLocation}
        />

        <FormContainer marginBottom="1rem">
          <StyledLabel htmlFor="material">Material:</StyledLabel>
          <StyledTextArea
            id="material"
            name="material"
            rows="15"
            minLength="3"
            value={formData.material || ""}
            onChange={handleInputChange}
          />
        </FormContainer>

        {filteredColonies.map((colony) => {
          return (
            <StyledRowSection key={colony.id}>
              <CardElement padding="1.8rem 0.5rem">
                <StyledLink href={`/colonydetail/${colony.id}`}>
                  {colony?.colonyName}
                </StyledLink>
                <StyledEditDeleteButton
                  onClick={() => handleEditClick(colony)}
                  icon={FaRegEdit}
                  ariaLabel="edit"
                  right="1.3rem"
                />
                <StyledEditDeleteButton
                  onClick={() => handleDeleteClick(colony)}
                  icon={TiDelete}
                  ariaLabel="delete"
                  padding="0.2rem 0.5rem 0 0.3rem"
                />
              </CardElement>
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
      <StyledLink href={`/locationdetail/addcolony/${id}`} marginleft="17rem">
        Add Colony
      </StyledLink>

      <StyledBackLink href={"/"} />
    </>
  );
}
