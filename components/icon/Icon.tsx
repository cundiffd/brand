// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { clsx } from "clsx";
import { FC, HTMLAttributes } from "react";

/**
 * Configurable options for an icon.
 */
export type IconProps = HTMLAttributes<HTMLElement> & {
  vector: Vector;
  size?: number;
};

/**
 * Create a new icon component.
 * @param props Configurable options for the component.
 * @returns An icon component.
 */
export const Icon: FC<IconProps> = (props: IconProps) => {
  return (
    <span
      {...props}
      className={clsx("material-symbols-outlined", props.className)}
      style={{ fontSize: props.size ?? 16, lineHeight: 1, ...props.style }}
    >
      {props.vector}
    </span>
  );
};

/**
 * A supported icon vector.
 */
export type Vector = "arrow_left_alt" | "close" | "code" | "language" | "menu" | "north_east";
