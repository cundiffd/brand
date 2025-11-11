// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { clsx } from "clsx";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

/**
 * Configurable options for text.
 */
export type TextProps = PropsWithChildren & {
  className?: string;
  path?: string;
};

/**
 * Create a new text component.
 * @param props Configurable options for the component.
 * @returns A text component.
 */
export const Text: FC<TextProps> = ({ path, children, ...props }: TextProps) => {
  const { t, ready } = useTranslation();

  if (path && !ready) {
    return null;
  }

  return <span {...props}>{children ?? (path ? t(path) : "")}</span>;
};
