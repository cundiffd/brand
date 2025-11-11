// Copyright © Spatial Corporation. All rights reserved.

import { clsx } from "clsx";
import { FC, PropsWithChildren } from "react";

/**
 * Configurable options for a tag.
 */
export type TagProps = PropsWithChildren & {
  className?: string;
};

export const Tag: FC<TagProps> = ({ className, ...props }: TagProps) => {
  return (
    <span
      {...props}
      className={clsx(
        "inline-flex",
        "rounded-full px-6 py-2",
        "font-bold uppercase text-sm",
        "whitespace-nowrap",
        "bg-background-surface text-foreground-primary",
        className
      )}
    />
  );
};
