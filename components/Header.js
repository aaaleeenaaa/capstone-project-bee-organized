import styled from "styled-components";
import Image from "next/image";

const Headline = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.3em 0.8em;
  font-size: 2em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ded533;
  color: #4b068c;
  z-index: 1;
`;

const StyledImage = styled(Image)`
  margin: 0 1rem;
`;

export default function Header() {
  return (
    <>
      <Headline>
        Bee{" "}
        <StyledImage
          src="/Bee-icon.svg"
          alt="Bee icon"
          width={50}
          height={50}
        />{" "}
        organized
      </Headline>
    </>
  );
}
