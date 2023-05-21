import { FormContainer } from "./StyledFormElements";
import useLocalStorageState from "use-local-storage-state";
import { StyledCard, StyledLabel } from "./StyledQuestionElements";
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

      <StyledCard>
        <StyledLabel htmlFor="question1">1. Stifte?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question2">2. Königin?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question3">3. Farbe der Königin?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question4">4. Bruträhmchen?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question5">5. Drohnenrahmen?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question6">6. Weisel?</StyledLabel>
        <input
          id="question6"
          name="question6"
          type="text"
          maxLength="30"
          minLength="3"
          value={formData.question6 || ""}
          onChange={handleInputChange}
        />
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question7">7. Honigräume?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question8">8. Aktueller Honigraum?</StyledLabel>
        <input
          id="question8"
          name="question8"
          type="range"
          value={formData.question8 || ""}
          onChange={handleInputChange}
        />
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="question9">9. Ameisensäure?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
        <StyledLabel htmlFor="quesion10">10. Gefüttert?</StyledLabel>
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
      </StyledCard>

      <StyledCard>
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
      </StyledCard>
    </FormContainer>
  );
}
