"use client";

import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

type LogoType = {
  showTitle?: boolean;
  showIcon?: boolean;
};
function Logo({ showTitle = true, showIcon = true }: LogoType) {
  if (!showTitle && !showIcon) return <></>;

  return (
    <div className={styles.logo_wrapper}>
      {showIcon && (
        <Image
          src="/favicon.ico"
          alt="Next.js logo"
          width={42}
          height={42}
          priority
        />
      )}
      {showTitle && <h2>Ticky</h2>}
    </div>
  );
}

export default Logo;
