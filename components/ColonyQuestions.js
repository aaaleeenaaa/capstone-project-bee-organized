import styled from "styled-components";
import { FormContainer } from "./LocationForm";

const StyledQuestionCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px grey solid;
  padding: 1em;
  width: 90%;
`;

const StyledQuestionLabel = styled.label`
  font-style: italic;
  text-align: center;
`;

export default function ColonyQuestions() {
  return (
    <FormContainer>
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
          />
        </div>
        <div>
          <label htmlFor="question2answer2">Answer 2</label>
          <input
            id="question2answer2"
            name="question2answer2"
            type="checkbox"
          />
        </div>
        <div>
          <label htmlFor="question2answer3">Answer 3</label>
          <input
            id="question2answer3"
            name="question2answer3"
            type="checkbox"
          />
        </div>
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question3">
          Question 3: Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam?
        </StyledQuestionLabel>
        <input id="question3" name="question3" type="range" />
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question1">
          Question 4: Lorem ipsum dolor sit amet?
        </StyledQuestionLabel>
        <input
          id="question4"
          name="question4"
          type="textarea"
          maxLength="30"
          minLength="3"
        />
      </StyledQuestionCard>

      <StyledQuestionCard>
        <StyledQuestionLabel htmlFor="question2">
          Question 5: Lorem ipsum?
        </StyledQuestionLabel>
        <div>
          <label htmlFor="question5answer1">Answer 1</label>
          <input
            id="question5answer1"
            name="question5answer1"
            type="checkbox"
          />
        </div>
        <div>
          <label htmlFor="question5answer2">Answer 2</label>
          <input
            id="question5answer2"
            name="question5answer2"
            type="checkbox"
          />
        </div>
        <div>
          <label htmlFor="question5answer3">Answer 3</label>
          <input
            id="question5answer3"
            name="question5answer3"
            type="checkbox"
          />
        </div>
      </StyledQuestionCard>
    </FormContainer>
  );
}