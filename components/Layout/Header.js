import styled from "styled-components";
import Image from "next/image";

const StyledHeadline = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.3em 0.8em;
  font-size: 2em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow);
  color: var(--purple);
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

const StyledLogo = styled(Image)`
  margin: 0 1rem;
`;

export default function Header() {
  return (
    <>
      <StyledHeadline>
        Bee{" "}
        <StyledLogo src="/Bee-icon.svg" alt="Bee icon" width={50} height={50} />{" "}
        organized
      </StyledHeadline>
    </>
  );
}
