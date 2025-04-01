"use client";

import styled from "styled-components";
import React from "react";
import Logo from "../Logo";
import Avatar from "../Avatar";

const HeaderWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Avatar />
    </HeaderWrapper>
  );
}

export default Header;
