import {
  StyledQuestionCard,
  StyledQuestionLabel,
  StyledQuestionTextArea,
} from "./StyledQuestionElements";
import useLocalStorageState from "use-local-storage-state";

export default function GeneralNotes({
  padding,
  width,
  margin,
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
    <StyledQuestionCard
      padding={padding}
      width={width}
      margin={margin}
      isLocation={isLocation}
    >
      <StyledQuestionLabel htmlFor="generalNotes">
        {isLocation
          ? "General notes about the location:"
          : "General notes about the colony:"}
      </StyledQuestionLabel>
      <StyledQuestionTextArea
        id="generalNotes"
        name="generalNotes"
        type="text"
        rows="3"
        maxLength="100"
        minLength="3"
        value={formData.generalNotes || ""}
        onChange={handleInputChange}
      />
    </StyledQuestionCard>
  );
}
