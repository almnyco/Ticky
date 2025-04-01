"use client";

import React from "react";
import styled from "styled-components";

type ContainerType = {
  children: React.ReactNode;
};

const ContainerWrapper = styled.div`
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

function Container({ children }: ContainerType) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

export default Container;
