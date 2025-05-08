"use client";

import React, { ComponentProps } from "react";
import Image from "next/image";
import styles from "./index.module.css";

type LogoType = {
  showTitle?: boolean;
  showIcon?: boolean;
} & ComponentProps<"div">;

function Logo({ showTitle = true, showIcon = true, ...props }: LogoType) {
  if (!showTitle && !showIcon) return <></>;

  return (
    <div className={`${styles.logo_wrapper} ${props?.className}`}>
      {showIcon && (
        <Image
          src="/favicon.ico"
          alt="Next.js logo"
          width={46}
          height={46}
          priority
        />
      )}
      {showTitle && <h2>Ticky</h2>}
    </div>
  );
}

export default Logo;
