import Card from "./Card";
import { StyledSection, StyledRowSection } from "./StyledSections";
import useLocalStorageState from "use-local-storage-state";
import { FormContainer, Label, Input } from "./StyledFormElements";
import { StyledEditModal } from "./StyledEditModal";
import { StyledLink } from "./StyledLinks";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { StyledEditDeleteButton } from "./StyledButtons";
import { TiDelete } from "react-icons/ti";
import { CardElement } from "./StyledSections";

export default function LocationList({ locations, setLocations }) {
  const [showModal, setShowModal] = useLocalStorageState("showModal", {
    defaultValue: false,
  });

  const [editingLocation, setEditingLocation] = useState(null);

  function handleEditClick(location) {
    setEditingLocation(location);
    setShowModal(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLocations(
      locations.map((location) => {
        return location.id === editingLocation.id
          ? { ...location, locationName: event.target.locationName.value }
          : location;
      })
    );

    setShowModal(false);
  }

  function handleDeleteClick(locationToDelete) {
    setLocations(
      locations.filter((location) => location.id !== locationToDelete.id)
    );
  }

  return (
    <StyledSection>
      {locations.map((location) => {
        return (
          <StyledRowSection key={location.id}>
            <CardElement padding="1.8rem 0.5rem">
              <StyledLink href={`/locationdetail/${location.id}`}>
                {location?.locationName}
              </StyledLink>
              <StyledEditDeleteButton
                onClick={() => handleEditClick(location)}
                icon={FaRegEdit}
                ariaLabel="edit"
                right="1.3rem"
              />
              <StyledEditDeleteButton
                onClick={() => handleDeleteClick(location)}
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
            Edit Location: {""}
            <Input
              type="text"
              name="locationName"
              defaultValue={editingLocation?.locationName || ""}
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
  );
}
