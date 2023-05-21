import { StyledLabel, StyledTextArea } from "./StyledQuestionElements";
import useLocalStorageState from "use-local-storage-state";

export default function GeneralNotes({
  isLocation,
  currentLocation,
  currentColony,
}) {
  const currentId = isLocation ? currentLocation?.id : currentColony?.id;

  const [formData, setFormData] = useLocalStorageState(
    `formData_${currentId}`,
    { defaultValue: [] }
  );

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <>
      <StyledLabel htmlFor="generalNotes">
        {isLocation
          ? "General notes about the location:"
          : "General notes about the colony:"}
      </StyledLabel>
      <StyledTextArea
        id="generalNotes"
        name="generalNotes"
        type="text"
        rows="3"
        maxLength="100"
        minLength="3"
        value={formData.generalNotes || ""}
        onChange={handleInputChange}
      />
    </>
  );
}
