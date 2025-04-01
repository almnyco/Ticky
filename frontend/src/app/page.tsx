"use client";

import styles from "./page.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import useLoadedApplication from "../hooks/useLoadedApplication";

function App({ children }: { children: React.ReactNode }) {
  const isLoaded = useLoadedApplication();

  if (!isLoaded) return <></>;

  return (
    <div className={styles.root_page_wrapper}>
      <Sidebar />
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
}

export default App;
