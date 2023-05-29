import { useRouter } from "next/router";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { StyledBackLink, StyledLink } from "@/components/StyledLinks";
import { StyledSection, StyledRowSection } from "@/components/StyledSections";
import {
  StyledFormContainer,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "@/components/StyledFormElements";
import { StyledEditModal } from "@/components/StyledEditModal";
import { StyledEditDeleteButton } from "@/components/StyledButtons";
import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { StyledCardElement } from "@/components/StyledCardElement";
import GeneralNotes from "@/components/GeneralNotes";

export default function LocationDetailsPage({
  locations,
  colonies,
  setColonies,
  nextColonyChecks,
  setNextColonyChecks,
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

    const editedColonyName = event.target.colonyName.value;

    setColonies(
      colonies.map((colony) => {
        return colony.id === editingColony.id
          ? { ...colony, colonyName: editedColonyName }
          : colony;
      })
    );

    setNextColonyChecks(
      nextColonyChecks.map((check) => {
        if (check.colonyId === editingColony.id) {
          return { ...check, colonyName: editedColonyName };
        }
        return check;
      })
    );

    setShowModal(false);
  }

  function handleDeleteClick(colonyToDelete) {
    setColonies(colonies.filter((colony) => colony.id !== colonyToDelete.id));

    setNextColonyChecks(
      nextColonyChecks.filter((check) => check.colonyId !== colonyToDelete.id)
    );
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

        <StyledFormContainer marginBottom="1rem">
          <StyledLabel
            htmlFor="material"
            centeredItalic={true}
            fontweight="normal"
          >
            Material:
          </StyledLabel>
          <StyledTextArea
            id="material"
            name="material"
            rows="15"
            minLength="3"
            value={formData.material || ""}
            onChange={handleInputChange}
          />
        </StyledFormContainer>

        {filteredColonies.map((colony) => {
          return (
            <StyledRowSection key={colony.id}>
              <StyledCardElement padding="1.8rem 0.5rem">
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
                  icon={TiDeleteOutline}
                  ariaLabel="delete"
                  padding="0.2rem 0.5rem 0 0.3rem"
                />
              </StyledCardElement>
            </StyledRowSection>
          );
        })}

        <StyledEditModal isOpen={showModal}>
          <StyledFormContainer onSubmit={handleSubmit}>
            <StyledLabel>
              Edit Colony: {""}
              <StyledInput
                type="text"
                name="colonyName"
                defaultValue={editingColony?.colonyName || ""}
                maxLength="25"
                minLength="3"
                required
              />
            </StyledLabel>
            <button type="submit">Save</button>
            <button onClick={() => setShowModal(false)} type="button">
              Cancel
            </button>
          </StyledFormContainer>
        </StyledEditModal>
      </StyledSection>
      <StyledLink href={`/locationdetail/addcolony/${id}`} marginleft="17rem">
        Add Colony
      </StyledLink>

      <StyledBackLink href={"/"} />
    </>
  );
}
