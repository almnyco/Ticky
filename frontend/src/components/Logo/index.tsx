"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

type LogoType = {
  showTitle?: boolean;
  showIcon?: boolean;
};

const LogoWrapper = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  justify-content: flex-start;
`;

function Logo({ showTitle = true, showIcon = true }: LogoType) {
  if (!showTitle && !showIcon) return <></>;

  return (
    <LogoWrapper>
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
    </LogoWrapper>
  );
}

export default Logo;
