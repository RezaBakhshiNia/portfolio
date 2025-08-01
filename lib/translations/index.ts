import { en } from "./en"
import { es } from "./es"
import { fa } from "./fa"

export const translations = {
  en,
  es,
  fa,
}

export type Locale = keyof typeof translations
export type TranslationKeys = typeof en

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale] || translations.en
}
