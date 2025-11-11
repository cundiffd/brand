// Copyright © Spatial Corporation. All rights reserved.

import { FC, SVGProps } from "react";

/**
 * Configurable options for a Indiana symbol.
 */
export type IndianaProps = SVGProps<SVGSVGElement>;

/**
 * Create a new Indiana symbol component.
 * @param props Configurable options for the component.
 * @returns A Indiana symbol component.
 */
export const Indiana: FC<IndianaProps> = (props: IndianaProps) => {
  return (
    <svg viewBox="0 0 578 729" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_258_53)">
        <path
          d="M188.99 0V54.84H231.62V457.58H150.39V152.1H188.52V97.04H-0.00976562V152.1H42.6202V505.99L111.82 576.69H231.58V658.31H188.99V729H388.99V658.31H346.4V576.69H466.15L535.35 505.99V152.1H577.99V97.04H389.46V152.1H427.59V457.58H346.4V54.84H388.99V0H188.99Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_258_53">
          <rect width="577.97" height="729" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};
