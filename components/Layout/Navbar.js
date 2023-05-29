import styled, { css } from "styled-components";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { GiBeehive } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbList } from "react-icons/tb";
import useLocalStorageState from "use-local-storage-state";

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  background-color: var(--yellow);
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.2rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledNavSection = styled.section`
  background-color: transparent;
  ${(props) =>
    props.isActive &&
    css`
      background-color: var(--activeBackground);
      border-radius: 10%;
      font-size: 2rem;
    `}
`;

export default function NavBar() {
  const [activeItem, setActiveItem] = useLocalStorageState("activeItem", {
    defaultValue: "home",
  });

  function handleClick(item) {
    setActiveItem(item);
  }

  return (
    <StyledNavbar>
      <Link href="/">
        <StyledNavSection
          isActive={activeItem === "home"}
          onClick={() => handleClick("home")}
        >
          <AiFillHome color="var(--purple)" />
        </StyledNavSection>
      </Link>

      <Link href="/overview">
        <StyledNavSection
          isActive={activeItem === "overview"}
          onClick={() => handleClick("overview")}
        >
          <GiBeehive color="var(--purple)" />
        </StyledNavSection>
      </Link>

      <Link href="/weather">
        <StyledNavSection
          isActive={activeItem === "weather"}
          onClick={() => handleClick("weather")}
        >
          <TiWeatherPartlySunny color="var(--purple)" />
        </StyledNavSection>
      </Link>

      <Link href="/todolist">
        <StyledNavSection
          isActive={activeItem === "todo"}
          onClick={() => handleClick("todo")}
        >
          <TbList color="var(--purple)" />
        </StyledNavSection>
      </Link>
    </StyledNavbar>
  );
}
