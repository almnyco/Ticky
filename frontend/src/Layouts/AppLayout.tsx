"use client";

import styles from "./layout.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
// import Breadcrumbs from "../components/Breadcrumbs";
import useLoadedApplication from "../hooks/useLoadedApplication";

function AppLayout({ children }: { children: React.ReactNode }) {
  const isLoaded = useLoadedApplication();

  if (!isLoaded) return <></>;
  return (
    <div className={styles.root_page_wrapper}>
      <Sidebar />
      <Container>
        <Header />
        {/* <Breadcrumbs /> */}
        {children}
      </Container>
    </div>
  );
}

export default AppLayout;
