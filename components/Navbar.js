import styled from "styled-components";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { GiBeehive } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GrTask } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0.2em 0.8em;
  text-align: center;
  border: 3px solid black;
  font-size: 2em;
  background-color: #f2ee74;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
`;

const NavSection = styled.section`
  background-color: ${(props) => (props.isActive ? "#8aa838" : "transparent")};
`;
export default function NavBar() {
  const [activeItem, setActiveItem] = useState("home");
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
          <AiFillHome color="black" />
        </NavSection>
      </Link>
      <Link href="/overview">
        <NavSection
          isActive={activeItem === "overview"}
          onClick={() => handleClick("overview")}
        >
          <GiBeehive color="black" />
        </NavSection>
      </Link>
      <Link href="/weather">
        <NavSection
          isActive={activeItem === "weather"}
          onClick={() => handleClick("weather")}
        >
          <TiWeatherPartlySunny color="black" />
        </NavSection>
      </Link>
      <Link href="/todolist">
        <NavSection
          isActive={activeItem === "todo"}
          onClick={() => handleClick("todo")}
        >
          <GrTask color="black" />
        </NavSection>
      </Link>
      <Link href="/profile">
        <NavSection
          isActive={activeItem === "profile"}
          onClick={() => handleClick("profile")}
        >
          <CgProfile color="black" />
        </NavSection>
      </Link>
    </Navbar>
  );
}
