// Copyright © Spatial Corporation. All rights reserved.

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: `${process.env.NEXT_PUBLIC_BASE_URL}/locales/{{lng}}/{{ns}}.json?v=${Date.now()}`
    },
    react: {
      useSuspense: false
    },
    load: "languageOnly"
  });

export default i18n;
