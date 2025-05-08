"use client";

import React from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import styles from "./header.module.css";
import Menu from "../Sidebar/Menu";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <Menu className={styles.header_sidebarmenu_hidden} />
      <div className={styles.header_actions}>
        <Button size="small">Nova tarefa</Button>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
