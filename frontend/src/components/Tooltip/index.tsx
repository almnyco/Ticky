"use client";

import { Tooltip as TooltipComponent, ITooltip } from "react-tooltip";
import styles from "./tooltip.module.css";
import React from "react";

type TooltipProps = {} & ITooltip;

function Tooltip(props: TooltipProps) {
  return <TooltipComponent className={styles.tooltip_wrapper} {...props} />;
}

export default Tooltip;
