import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getTranslation, type Locale } from "@/lib/translations"
import type { Metadata } from "next"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslation(locale)

  return {
    title: `${t.home.name} - ${t.home.title}`,
    description: t.home.tagline,
    keywords: ["front-end developer", "React", "Next.js", "JavaScript", "web development", "portfolio"],
    authors: [{ name: t.home.name }],
    creator: t.home.name,
    openGraph: {
      type: "website",
      locale: locale,
      url: "https://alexjohnson.dev",
      title: `${t.home.name} - ${t.home.title}`,
      description: t.home.tagline,
      siteName: `${t.home.name} Portfolio`,
    },
  }
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "fa" }]
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  const isRTL = locale === "fa"

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazir:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <Navigation locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
