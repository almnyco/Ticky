"use client";

import React from "react";
import MenuOpenedIcon from "/public/icons/menu-opened.svg";
import MenuClosedIcon from "/public/icons/menu-closed.svg";
import styled from "styled-components";
import useSidebarContext from "@/src/hooks/useSidebarContext";

const SidebarMenuWrapper = styled.div`
  display: flex;
  min-width: 42px;
  min-height: 42px;
  align-items: center;
  transition: all 0.2s;
  border-radius: 12px;
  justify-content: center;

  &:hover {
    background-color: #30303070;
    cursor: pointer;
  }
`;

function SidebarMenu() {
  const { isOpen, handleOpenSidebar } = useSidebarContext();

  return (
    <SidebarMenuWrapper onClick={handleOpenSidebar}>
      {isOpen ? <MenuClosedIcon /> : <MenuOpenedIcon />}
    </SidebarMenuWrapper>
  );
}
export default SidebarMenu;
