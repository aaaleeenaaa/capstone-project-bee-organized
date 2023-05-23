import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  font-weight: ${(props) => props.fontweight || "bold"};
  margin-right: ${(props) => props.marginright || "0"};
  flex: 1;
  ${(props) =>
    props.centeredItalic &&
    css`
      font-style: italic;
      text-align: center;
    `}
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const StyledFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  flex-grow: 1;
`;

const StyledTextArea = styled.textarea`
  width: 19.4rem;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 1rem 5rem;
`;

const StyledLegend = styled.legend`
  text-align: center;
`;

export {
  StyledLabel,
  StyledInput,
  StyledFormContainer,
  StyledTextArea,
  StyledFieldset,
  StyledLegend,
};
