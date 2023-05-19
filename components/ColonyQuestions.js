import { FormContainer } from "./StyledFormElements";
import useLocalStorageState from "use-local-storage-state";
import {
  StyledQuestionCard,
  StyledQuestionLabel,
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

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question1">
          Question 1: Lorem ipsum?
        </StyledQuestionLabel>
        <input
          id="question1"
          name="question1"
          type="text"
          maxLength="30"
          minLength="3"
          value={formData.question1 || ""}
          onChange={handleInputChange}
        />
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question2">
          Question 2: Lorem ipsum dolor sit amet?
        </StyledQuestionLabel>
        <div>
          <label htmlFor="question2answer1">Answer 1</label>
          <input
            id="question2answer1"
            name="question2answer1"
            type="checkbox"
            checked={formData.question2answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question2answer2">Answer 2</label>
          <input
            id="question2answer2"
            name="question2answer2"
            type="checkbox"
            checked={formData.question2answer2 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question2answer3">Answer 3</label>
          <input
            id="question2answer3"
            name="question2answer3"
            type="checkbox"
            checked={formData.question2answer3 || false}
            onChange={handleInputChange}
          />
        </div>
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question3">
          Question 3: Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam?
        </StyledQuestionLabel>
        <input
          id="question3"
          name="question3"
          type="range"
          value={formData.question3 || ""}
          onChange={handleInputChange}
        />
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question4">
          Question 4: Lorem ipsum dolor sit amet?
        </StyledQuestionLabel>
        <input
          id="question4"
          name="question4"
          type="textarea"
          maxLength="30"
          minLength="3"
          value={formData.question4 || ""}
          onChange={handleInputChange}
        />
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question5">
          Question 5: Lorem ipsum?
        </StyledQuestionLabel>
        <div>
          <label htmlFor="question5answer1">Answer 1</label>
          <input
            id="question5answer1"
            name="question5answer1"
            type="checkbox"
            checked={formData.question5answer1 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question5answer2">Answer 2</label>
          <input
            id="question5answer2"
            name="question5answer2"
            type="checkbox"
            checked={formData.question5answer2 || false}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question5answer3">Answer 3</label>
          <input
            id="question5answer3"
            name="question5answer3"
            type="checkbox"
            checked={formData.question5answer3 || false}
            onChange={handleInputChange}
          />
        </div>
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="lastColonyCheck">
          Last check of colony:
        </StyledQuestionLabel>
        <input
          id="lastColonyCheck"
          name="lastColonyCheck"
          type="date"
          value={formData.lastColonyCheck || ""}
          onChange={handleInputChange}
        />
        <StyledQuestionLabel htmlFor="nextColonyCheck">
          Next colony check due:
        </StyledQuestionLabel>
        <input
          id="nextColonyCheck"
          name="nextColonyCheck"
          type="date"
          value={formData.nextColonyCheck || ""}
          onChange={handleInputChange}
        />
      </StyledQuestionCard>
    </FormContainer>
  );
}
