import styled, { css } from "styled-components";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { GiBeehive } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbList } from "react-icons/tb";
import useLocalStorageState from "use-local-storage-state";

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  background-color: #ded533;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.2rem;
`;

const NavSection = styled.section`
  background-color: transparent;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #b8b01c;
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
    <Navbar>
      <Link href="/">
        <NavSection
          isActive={activeItem === "home"}
          onClick={() => handleClick("home")}
        >
          <AiFillHome color="#4b068c" />
        </NavSection>
      </Link>

      <Link href="/overview">
        <NavSection
          isActive={activeItem === "overview"}
          onClick={() => handleClick("overview")}
        >
          <GiBeehive color="#4b068c" />
        </NavSection>
      </Link>

      <Link href="/weather">
        <NavSection
          isActive={activeItem === "weather"}
          onClick={() => handleClick("weather")}
        >
          <TiWeatherPartlySunny color="#4b068c" />
        </NavSection>
      </Link>

      <Link href="/todolist">
        <NavSection
          isActive={activeItem === "todo"}
          onClick={() => handleClick("todo")}
        >
          <TbList color="#4b068c" />
        </NavSection>
      </Link>
    </Navbar>
  );
}
