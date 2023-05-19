import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRowSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;
