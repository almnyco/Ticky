import React from "react";
import AuthContextProvider from "./AuthContext";
import SidebarContextProvider from "./SidebarContext";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </AuthContextProvider>
  );
}

export default Providers;
