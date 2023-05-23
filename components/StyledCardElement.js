import styled from "styled-components";

const StyledCardElement = styled.article`
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

export { StyledCardElement };
