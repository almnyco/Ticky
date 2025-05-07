"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import styles from "./index.module.css";
import SidebarMenu from "../SidebarMenu";
import { usePathname } from "next/navigation";
import HomeIcon from "/public/icons/home.svg";
import RepoIcon from "/public/icons/repo.svg";
import GearIcon from "/public/icons/gear.svg";
import CheckIcon from "/public/icons/check.svg";
import PersonIcon from "/public/icons/person.svg";
import useSidebarContext from "@/src/hooks/useSidebarContext";
import Button from "../Button";
import AuthProvider from "@/src/providers/AuthProvider";

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
  const { isOpen } = useSidebarContext();
  const { signout } = AuthProvider();
  const pathroute = usePathname();

  function getIsSamePath(menupath: string) {
    const isSamePath =
      (menupath === "/home" && pathroute === "/") || menupath === pathroute;

    return isSamePath;
  }

  return (
    <div
      className={`${styles.sidebar_wrapper} ${
        !isOpen && styles.sidebar_wrapper_closed
      } `}
    >
      <div className={styles.sidebar_header}>
        <Logo className={styles.sidebar_header_logo} />
        <SidebarMenu />
      </div>
      <nav className={styles.sidebar_menu_list}>
        <ul className={styles.sidebar_menu_list}>
          {menu.map((m, i) => (
            <li key={`menu_item_${i}`}>
              <Link
                href={m.path}
                className={`${styles.sidebar_menu_item} ${
                  getIsSamePath(m.path) && styles.sidebar_menu_item_selected
                }`}
              >
                <div className={styles.sidebar_menu_icon}>{m.icon}</div>
                <p className={styles.sidebar_menu_name}>{m.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button fullWidth onClick={() => signout()}>
        Sign Out
      </Button>
    </div>
  );
}

export default Sidebar;
