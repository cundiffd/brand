// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { FC, PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../i18n";

/**
 * Configurable options for a translation provider.
 */
export type TranslationProviderProps = PropsWithChildren;

/**
 * Create a new translation provider component.
 * @param props Configurable options for the component.
 * @returns A translation provider component.
 */
export const TranslationProvider: FC<TranslationProviderProps> = (props: TranslationProviderProps) => {
  return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>;
};
