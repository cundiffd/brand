// Copyright © Spatial Corporation. All rights reserved.

import { clsx } from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

/**
 * Configurable options for a button.
 */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Create a new button component.
 * @param props Configurable options for the component.
 * @returns A button component.
 */
export const Button: FC<ButtonProps> = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx("cursor-pointer", "transition-all", "inline-flex items-center whitespace-nowrap", "rounded-full px-8 h-12", className)}
    />
  );
};
