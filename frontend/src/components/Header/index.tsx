"use client";

import React from "react";
import Logo from "../Logo";
import Avatar from "../Avatar";
import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <Logo />
      <Avatar />
    </div>
  );
}

export default Header;
