"use client";

import React from "react";
import App from "../app/page";
import SidebarContextProvider from "./SidebarContext";

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarContextProvider>
      <App>{children}</App>
    </SidebarContextProvider>
  );
}

export default AppLayout;
