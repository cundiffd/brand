// Copyright © Spatial Corporation. All rights reserved.

import { LinkProps as NextLinkProps } from "next/link";
import { join } from "path";
import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";

/**
 * Configurable options for a link.
 */
export type LinkProps = NextLinkProps & {
  children: ReactNode;
  className?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
};

/**
 * Create a new link component.
 * @param props Configurable options for the component.
 * @returns A link component.
 */
export const Link: FC<LinkProps> = ({ target, href, className, children, ...props }: LinkProps) => {
  return (
    <a
      {...props}
      target={target}
      href={href.startsWith("http") ? href : join(process.env.NEXT_PUBLIC_BASE_URL || "", href)}
      className={className}
      children={children}
    />
  );
};
