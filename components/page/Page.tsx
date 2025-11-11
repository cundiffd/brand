// Copyright © Spatial Corporation. All rights reserved.

import { FC, PropsWithChildren } from "react";

/**
 * Configurable options for a page.
 */
export type PageProps = PropsWithChildren;

export const Page: FC<PageProps> = (props: PageProps) => {
  return <main className="flex flex-col w-full min-h-screen" {...props} />;
};
