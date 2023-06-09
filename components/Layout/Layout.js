import Header from "./Header.js";
import styled from "styled-components";
import Head from "next/head";
import NavBar from "./Navbar.js";

const StyledMain = styled.main`
  margin-top: 5rem;
  margin-bottom: 4.5rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bee organized</title>
      </Head>
      <Header />
      <StyledMain>{children}</StyledMain>
      <NavBar />
    </>
  );
}
