"use client";

import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import useLoadedApplication from "../hooks/useLoadedApplication";

const RootPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: center;
  height: 100%;
  padding: 1rem;
  font-family: var(--font-inter-sans);
`;

function App({ children }: { children: React.ReactNode }) {
  const isLoaded = useLoadedApplication();

  if (!isLoaded) return <></>;

  return (
    <RootPageWrapper>
      <Sidebar />
      <Container>
        <Header />
        {children}
      </Container>
    </RootPageWrapper>
  );
}

export default App;
