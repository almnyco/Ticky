"use client";

import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import HomeIcon from "/public/icons/home.svg";
import RepoIcon from "/public/icons/repo.svg";
import GearIcon from "/public/icons/gear.svg";
import CheckIcon from "/public/icons/check.svg";
import PersonIcon from "/public/icons/person.svg";
import Logo from "../Logo";
import SidebarMenu from "../SidebarMenu";

const SidebarWrapper = styled.div`
  max-width: fit-content;
  min-width: 275px;
  height: 100%;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  min-height: 100%;
  border-radius: 0.75rem;
  background-color: #171717;

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
  }

  @media screen and (min-width: 1024px) {
    max-width: 150px;
  }
`;

const SidebarHeader = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  gap: 0.5rem;
  user-select: none;
  flex-direction: row;
`;

const MenuItem = styled.a<{ $isSamePath: () => boolean }>`
  li {
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    gap: 0.5rem;
    font-size: medium;
    border-radius: 0.5rem;
    background-color: #202020;
    color: ${(props) => (props.$isSamePath() ? "#ededed" : "#8a8a8a")};
  }

  li svg path {
    stroke: ${(props) => (props.$isSamePath() ? "#ededed;" : "#8a8a8a")};
  }

  li:hover {
    transition: ease-out 0.2s;
    scale: 1.0251;
  }
`;

const menu = [
  {
    id: "home",
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    id: "mytasks",
    name: "My Tasks",
    path: "/mytasks",
    icon: <PersonIcon />,
  },
  {
    id: "sharedtasks",
    name: "Shared Tasks",
    path: "/sharedtasks",
    icon: <RepoIcon />,
  },
  {
    id: "completedtasks",
    name: "Completed",
    path: "/completedtasks",
    icon: <CheckIcon />,
  },
  {
    id: "settings",
    name: "Settings",
    path: "/settings",
    icon: <GearIcon />,
  },
];

function Sidebar() {
  const pathroute = usePathname();

  function getIsSamePath(menupath: string) {
    const isSamePath =
      (menupath === "/home" && pathroute === "/") || menupath === pathroute;

    return isSamePath;
  }

  return (
    <SidebarWrapper>
      <SidebarHeader>
        <Logo />
        <SidebarMenu />
      </SidebarHeader>
      <nav>
        <ul>
          {menu.map((m, i) => (
            <MenuItem
              key={`menu_item_${i}`}
              href={m.path}
              $isSamePath={() => getIsSamePath(m.path)}
            >
              <li>
                {m.icon}
                {m.name}
              </li>
            </MenuItem>
          ))}
        </ul>
      </nav>
    </SidebarWrapper>
  );
}

export default Sidebar;
