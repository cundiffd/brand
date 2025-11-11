// Copyright © Spatial Corporation. All rights reserved.

import { clsx } from "clsx";
import { FC } from "react";

import { Container, ContainerProps } from "../container";

/**
 * Configurable options for a view.
 */
export type ViewProps = ContainerProps & {
  className?: string;
  innerClassName?: string;
};

/**
 * Create a new view component.
 * @param props Configurable options for the component.
 * @returns A view component.
 */
export const View: FC<ViewProps> = ({ grow, className, innerClassName, ...props }: ViewProps) => {
  return (
    <Container className={clsx("w-full px-8 md:px-0", className)} justify="center" grow={grow}>
      <Container {...props} className={clsx(innerClassName, "w-full md:w-10/12")} />
    </Container>
  );
};
