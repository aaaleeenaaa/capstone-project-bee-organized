import styled from "styled-components";
import Modal from "react-modal";

export const StyledEditModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18rem;
  max-width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;
