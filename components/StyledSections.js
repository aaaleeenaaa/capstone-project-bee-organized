import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRowSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.marginbottom || "0"};
  justify-content: center;
  position: relative;
`;

export { StyledSection, StyledRowSection };
