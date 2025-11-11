// Copyright © Spatial Corporation. All rights reserved.

import { FC, SVGProps } from "react";

/**
 * Configurable options for a Microsoft symbol.
 */
export type MicrosoftProps = SVGProps<SVGSVGElement>;

/**
 * Create a new Microsoft symbol component.
 * @param props Configurable options for the component.
 * @returns A Microsoft symbol component.
 */
export const Microsoft: FC<MicrosoftProps> = (props: MicrosoftProps) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 0h15.206v15.206H0z" fill="currentColor" />
      <path d="M16.794 0H32v15.206H16.794z" fill="currentColor" />
      <path d="M0 16.794h15.206V32H0z" fill="currentColor" />
      <path d="M16.794 16.794H32V32H16.794z" fill="currentColor" />
    </svg>
  );
};
