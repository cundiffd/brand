// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Dropdown } from "../dropdown";
import { Icon } from "../icon";

const languages: { code: string; name: string }[] = [
  { code: "en", name: "English" }
  //{ code: "sw", name: "Kiswahili" }
];

/**
 * Create a new language switch component.
 * @returns A language switch component.
 */
export const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="relative bg-background-base hover:bg-button-ghost-hover data-[state=open]:bg-button-ghost-active">
        <Icon vector="language" size={32} />
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content>
          <Dropdown.RadioGroup value={i18n.language} onValueChange={i18n.changeLanguage}>
            {languages.map((language, i) => (
              <Dropdown.RadioItem key={i} value={language.code} onSelect={(e) => e.preventDefault()}>
                {language.name}
                <Dropdown.ItemIndicator />
              </Dropdown.RadioItem>
            ))}
          </Dropdown.RadioGroup>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
