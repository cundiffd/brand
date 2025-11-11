// Copyright © Spatial Corporation. All rights reserved.

import { CSSProperties, FC, PropsWithChildren } from "react";

/**
 * Configurable options for a container.
 */
export type ContainerProps = PropsWithChildren & {
  direction?: "row" | "column";
  gap?: number | string;
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  wrap?: boolean;
  grow?: boolean;
  shrink?: boolean;
  basis?: number;
  className?: string;
};

/**
 * Create a new container component.
 * @param param0 Configurable options for the component.
 * @returns A container component.
 */
export const Container: FC<ContainerProps> = ({
  direction = "row",
  gap = 0,
  justify = "flex-start",
  align = "flex-start",
  wrap = false,
  grow = false,
  shrink = false,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={className}
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexGrow: grow ? "1" : undefined,
        flexShrink: shrink ? "1" : undefined,
        flexBasis: props.basis,
        gap
      }}
    />
  );
};
