"use client"

import { useParams } from "next/navigation"
import { getTranslation, type Locale } from "./translations"

export function useTranslation() {
  const params = useParams()
  const locale = (params?.locale as Locale) || "en"
  const t = getTranslation(locale)

  return { t, locale }
}
