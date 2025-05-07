"use client";

import Tooltip from "../Tooltip";
import styles from "./chip.module.css";
import React, { Fragment } from "react";

type ChipIconProps = {
  src: string | React.ReactNode | React.JSX.Element;
  align?: "left" | "right";
};

type ChipTooltipProps = { tooltip?: boolean; tooltipContent?: string };

type ChipProps = {
  id: string;
  text: string;
  fullWidth?: boolean;
  icon?: ChipIconProps;
  textProps?: React.Component<"p">;
} & ChipTooltipProps &
  React.ComponentProps<"span">;

function Chip({
  id,
  text = "",
  textProps,
  tooltip = false,
  fullWidth = false,
  tooltipContent,
  icon = { src: <></>, align: "left" },
  ...props
}: ChipProps) {
  const tooltipOptions =
    tooltip && tooltipContent
      ? {
          "data-tooltip-content": tooltipContent,
          "data-tooltip-id": `chip_tooltip_component_${id}`,
        }
      : {};

  return (
    <Fragment>
      <span
        className={`${styles.chip_wrapper} ${
          fullWidth && styles.chip_full_width
        }`}
        {...props}
        id={`chip_component_${id}`}
        {...tooltipOptions}
      >
        {icon?.src && icon?.align !== "right" && (
          <div className={styles.chip_icon}>{icon.src}</div>
        )}

        <p {...textProps}>{text}</p>

        {icon?.src && icon?.align === "right" && (
          <div className={styles.chip_icon}>{icon.src}</div>
        )}
      </span>
      <Tooltip
        id={tooltipOptions["data-tooltip-id"]}
        place="bottom"
        content={tooltipOptions["data-tooltip-content"]}
      />
      {/* {tooltipOptions["data-tooltip-id"] && (
      )} */}
    </Fragment>
  );
}

export default Chip;
