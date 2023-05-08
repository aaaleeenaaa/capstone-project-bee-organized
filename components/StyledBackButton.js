import styled from "styled-components";

const BackButton = styled.button`
  position: fixed;
  bottom: 100px;
  left: 10px;
`;

export default function StyledBackButton({ onClick }) {
  return (
    <BackButton type="button" onClick={onClick} aria-label="back to prior page">
      ←
    </BackButton>
  );
}
