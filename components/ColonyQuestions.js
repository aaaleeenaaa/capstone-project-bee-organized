import { FormContainer } from "./StyledFormElements";
import useLocalStorageState from "use-local-storage-state";
import {
  StyledCard,
  StyledLabel,
  StyledFieldset,
  StyledLegend,
} from "./StyledQuestionElements";
import GeneralNotes from "./GeneralNotes";

export default function ColonyQuestions({ currentColony }) {
  const [formData, setFormData] = useLocalStorageState(
    `formData_${currentColony?.id}`,
    { defaultValue: [] }
  );

  const [nextColonyChecks, setNextColonyChecks] = useLocalStorageState(
    "nextColonyChecks",
    { defaultValue: [] }
  );

  function handleNextColonyCheckUpdate(value) {
    const updatedChecks = nextColonyChecks.filter(
      (check) => check.colonyName !== currentColony?.colonyName
    );
    updatedChecks.push({
      date: value,
      colonyName: currentColony?.colonyName,
    });
    setNextColonyChecks(updatedChecks);
  }

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
    if (name === "nextColonyCheck") {
      handleNextColonyCheckUpdate(newValue);
    }
  }

  return (
    <FormContainer>
      <GeneralNotes currentColony={currentColony} />

      <StyledFieldset>
        <StyledLegend>1. Stifte?</StyledLegend>
        <div>
          <label htmlFor="question1answer1">Ja</label>
          <input
            id="question1answer1"
            name="question1answer1"
            type="checkbox"
            checked={formData.question1answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question1answer2">Nein</label>
          <input
            id="question1answer2"
            name="question1answer2"
            type="checkbox"
            checked={formData.question1answer2 || false}
            onChange={handleInputChange}
          />
        </div>
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>2. Königin?</StyledLegend>
        <div>
          <label htmlFor="question2answer1">Ja</label>
          <input
            id="question2answer1"
            name="question2answer1"
            type="checkbox"
            checked={formData.question2answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question2answer2">Nein</label>
          <input
            id="question2answer2"
            name="question2answer2"
            type="checkbox"
            checked={formData.question2answer2 || false}
            onChange={handleInputChange}
          />
        </div>
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>3. Farbe der Königin?</StyledLegend>
        <div>
          <label htmlFor="question3answer1">Rot</label>
          <input
            id="question3answer1"
            name="question3answer1"
            type="checkbox"
            checked={formData.question3answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question3answer2">Grün</label>
          <input
            id="question3answer2"
            name="question3answer2"
            type="checkbox"
            checked={formData.question3answer2 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question3answer3">Blau</label>
          <input
            id="question3answer3"
            name="question3answer3"
            type="checkbox"
            checked={formData.question3answer3 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question3answer4">Weiß</label>
          <input
            id="question3answer4"
            name="question3answer4"
            type="checkbox"
            checked={formData.question3answer4 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question3answer5">Gelb</label>
          <input
            id="question3answer5"
            name="question3answer5"
            type="checkbox"
            checked={formData.question3answer5 || false}
            onChange={handleInputChange}
          />
        </div>
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>4. Bruträhmchen?</StyledLegend>
        <input
          id="question4answer1"
          name="question4answer1"
          type="text"
          maxLength="30"
          minLength="3"
          value={formData.question4answer1 || ""}
          onChange={handleInputChange}
        />
        <input
          id="question4answer2"
          name="question4answer2"
          type="range"
          value={formData.question4answer2 || ""}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>5. Drohnenrahmen?</StyledLegend>
        <div>
          <label htmlFor="question5answer1">Ja</label>
          <input
            id="question5answer1"
            name="question5answer1"
            type="checkbox"
            checked={formData.question5answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question5answer2">Nein</label>
          <input
            id="question5answer2"
            name="question5answer2"
            type="checkbox"
            checked={formData.question5answer2 || false}
            onChange={handleInputChange}
          />
        </div>
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>6. Weisel?</StyledLegend>
        <div>
          <label htmlFor="question6answer1">Ja</label>
          <input
            id="question6answer1"
            name="question6answer1"
            type="checkbox"
            checked={formData.question6answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question6answer2">Nein</label>
          <input
            id="question6answer2"
            name="question6answer2"
            type="checkbox"
            checked={formData.question6answer2 || false}
            onChange={handleInputChange}
          />
        </div>
        <input
          id="question6answer3"
          name="question6answer3"
          type="text"
          maxLength="30"
          minLength="3"
          value={formData.question6answer3 || ""}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>7. Honigräume?</StyledLegend>
        <div>
          <label htmlFor="question7answer1">1</label>
          <input
            id="question7answer1"
            name="question7answer1"
            type="checkbox"
            checked={formData.question7answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question7answer2">2</label>
          <input
            id="question7answer2"
            name="question7answer2"
            type="checkbox"
            checked={formData.question7answer2 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question7answer3">3</label>
          <input
            id="question7answer3"
            name="question7answer3"
            type="checkbox"
            checked={formData.question7answer3 || false}
            onChange={handleInputChange}
          />
        </div>
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>8. Aktueller Honigraum?</StyledLegend>
        <input
          id="question8answer1"
          name="question8answer1"
          type="text"
          maxLength="30"
          minLength="3"
          value={formData.question8answer1 || ""}
          onChange={handleInputChange}
        />
        <input
          id="question8answer2"
          name="question8answer2"
          type="range"
          value={formData.question8answer2 || ""}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>9. Ameisensäure?</StyledLegend>
        <input
          id="question9answer1"
          name="question9answer1"
          type="date"
          value={formData.question9answer1 || ""}
          onChange={handleInputChange}
        />
        <input
          id="question9answer2"
          name="question9answer2"
          type="text"
          maxLength="30"
          minLength="3"
          value={formData.question9answer2 || ""}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>10. Gefüttert?</StyledLegend>
        <input
          id="question10answer1"
          name="question10answer1"
          type="date"
          value={formData.question10answer1 || ""}
          onChange={handleInputChange}
        />
        <input
          id="question10answer2"
          name="question10answer2"
          type="text"
          maxLength="30"
          minLength="3"
          value={formData.question10answer2 || ""}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLegend>Colony Check:</StyledLegend>
        <StyledLabel htmlFor="lastColonyCheck">
          Last check of colony:
        </StyledLabel>
        <input
          id="lastColonyCheck"
          name="lastColonyCheck"
          type="date"
          value={formData.lastColonyCheck || ""}
          onChange={handleInputChange}
        />
        <StyledLabel htmlFor="nextColonyCheck">
          Next colony check due:
        </StyledLabel>
        <input
          id="nextColonyCheck"
          name="nextColonyCheck"
          type="date"
          value={formData.nextColonyCheck || ""}
          onChange={handleInputChange}
        />
      </StyledFieldset>
    </FormContainer>
  );
}
