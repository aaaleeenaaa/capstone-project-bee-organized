import styled from "styled-components";

export const StyledQuestionCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  padding: ${(props) => props.padding || "1em"};
  width: ${(props) => props.width || "90%"};
  margin: ${(props) => props.margin || "0"};
`;

export const StyledQuestionLabel = styled.label`
  font-style: italic;
  text-align: center;
`;

export const StyledQuestionTextArea = styled.textarea`
  width: 15rem;
`;
