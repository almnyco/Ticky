"use client";

import React from "react";
import Logo from "../Logo";
import Avatar from "../Avatar";
import styles from "./header.module.css";
import Button from "../Button";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <Logo />
      <div className={styles.header_actions}>
        <Button>Nova tarefa</Button>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
