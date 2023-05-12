import Card from "./Card";
import { StyledSection, StyledRowSection } from "./StyledSections";
import { StyledEditButton } from "./StyledButtons";
import useLocalStorageState from "use-local-storage-state";
import { FormContainer, Label, Input } from "./StyledFormElements";
import { StyledEditModal } from "./StyledEditModal";
import { StyledLink } from "./StyledLinks";
import { useState } from "react";

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

  return (
    <StyledSection>
      {locations.map((location) => {
        return (
          <StyledRowSection key={location.id}>
            <StyledLink href={`/locationdetail/${location.id}`}>
              <Card text={location?.locationName} />
            </StyledLink>
            <StyledEditButton onClick={() => handleEditClick(location)} />
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

// setLocations(
//   locations.map((location) => {
//     return location.id === editingLocation.id
//       ? { ...location, locationName: event.target.locationName.value }
//       : location;
//   })
// );
