"use client";

import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  width: 42px;
  height: 42px;
  padding: 1rem;
  border-radius: 999px;
  background-color: aliceblue;
`;

function Avatar() {
  return <AvatarWrapper />;
}

export default Avatar;
