// Copyright © Spatial Corporation. All rights reserved.

import { clsx } from "clsx";
import { FC } from "react";

/**
 * Configurable options for a spinner.
 */
export type SpinnerProps = {
  className?: string;
};

/**
 * Create a new spinner component.
 * @param props Configurable options for the component.
 * @returns A spinner component.
 */
export const Spinner: FC<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <div
      className={clsx("animate-spin rounded-full border-2 border-current border-t-transparent", props.className)}
      role="status"
      aria-label="Loading"
    />
  );
};
