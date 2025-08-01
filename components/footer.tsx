import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslation, type Locale } from "@/lib/translations"

type Props = {
  locale: Locale
}

export function Footer({ locale }: Props) {
  const t = getTranslation(locale)

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{t.home.name}</h3>
            <p className="text-muted-foreground mb-4">{t.footer.description}</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/rezabakhshinia" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/rezabakhshinia" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/rezabakhshinia" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:Rezabakhshinia2003@gmail.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-muted-foreground hover:text-primary">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/portfolio`} className="text-muted-foreground hover:text-primary">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-muted-foreground hover:text-primary">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-muted-foreground hover:text-primary">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t.footer.servicesItems.frontend}</li>
              <li>{t.footer.servicesItems.react}</li>
              <li>{t.footer.servicesItems.nextjs}</li>
              <li>{t.footer.servicesItems.ui}</li>
              <li>{t.footer.servicesItems.performance}</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t.home.name}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
