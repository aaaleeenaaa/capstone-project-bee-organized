import Header from "./Header.js";
import styled from "styled-components";
import Head from "next/head";

const Main = styled.main`
  margin-top: 5rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bee organized</title>
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
