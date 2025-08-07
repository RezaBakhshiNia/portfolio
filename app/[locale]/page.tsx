import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getTranslation, type Locale } from "@/lib/translations"

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  const t = getTranslation(locale)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row rtl:justify-around">
          <div className="flex-1 text-center lg:text-left rtl:text-right">
            <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              {t.home.name}
            </h1>
            <h2 className="mb-6 text-2xl text-muted-foreground md:text-3xl">{t.home.title}</h2>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{t.home.tagline}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="group">
                <Link href={`/${locale}/portfolio`}>
                  {t.home.viewWork}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              {/* This is the correct way to access your resume from the public folder */}
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  {t.home.downloadResume}
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/alexjohnson" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/alexjohnson" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:alex@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative">
              <div className="h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="h-full w-full overflow-hidden rounded-full transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/images/Reza-Bakhshi-Nia-mini.png"
                    alt={t.home.name}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">{t.home.techTitle}</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              { tech: "React", logo: "/images/logos/React.png" },
              { tech: "Next.js", logo: "/images/logos/Next.png" },
              { tech: "TypeScript", logo: "/images/logos/Typescript.png" },
              { tech: "Tailwind CSS", logo: "/images/logos/tailwindcss.svg" },
              { tech: "Node.js", logo: "/images/logos/nodejs.png" },
              { tech: "Git", logo: "/images/logos/Git.png" },
            ].map((item) => (
              <div key={item.tech} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg">
                  <span className="text-2xl font-bold text-primary transition-transform duration-200 hover:scale-105">
                    <Image alt={item.tech} src={item.logo} width={64} height={64} />
                  </span>
                </div>
                <p className="font-medium">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
