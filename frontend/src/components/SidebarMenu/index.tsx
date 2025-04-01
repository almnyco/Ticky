"use client";

import React from "react";
import styles from "./index.module.css";
import MenuOpenedIcon from "/public/icons/menu-opened.svg";
import MenuClosedIcon from "/public/icons/menu-closed.svg";
import useSidebarContext from "@/src/hooks/useSidebarContext";

function SidebarMenu() {
  const { isOpen, handleOpenSidebar } = useSidebarContext();

  return (
    <div className={styles.sidebar_menu} onClick={handleOpenSidebar}>
      {!isOpen ? <MenuClosedIcon /> : <MenuOpenedIcon />}
    </div>
  );
}
export default SidebarMenu;
