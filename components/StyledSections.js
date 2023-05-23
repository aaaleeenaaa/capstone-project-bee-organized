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
  justify-content: center;
`;

export const CardElement = styled.article`
  margin: 15px 0px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  width: ${(props) => props.width || "18rem"};
  display: ${(props) => props.display || "null"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  padding: ${(props) => props.padding || "1em"};
  position: relative;
`;
