"use client";

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type SidebarContextProps = {
  isOpen: boolean;
  handleOpenSidebar: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SidebarContextProviderProps = {
  children: React.ReactNode;
};

export const SidebarContext = createContext({} as SidebarContextProps);

function SidebarContextProvider({ children }: SidebarContextProviderProps) {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sidebar-isopen") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("sidebar-isopen", String(isOpen));
  }, [isOpen]);

  const handleOpenSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const contextValue = useMemo<SidebarContextProps>(
    () => ({ isOpen, setIsOpen: setIsOpen, handleOpenSidebar }),
    [isOpen, handleOpenSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContextProvider;
