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
        <div className="flex flex-col lg:flex-row items-center gap-12 rtl:justify-around">
          <div className="flex-1 text-center lg:text-left rtl:text-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.home.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">{t.home.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">{t.home.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="group">
                <Link href={`/${locale}/portfolio`}>
                  {t.home.viewWork}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
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
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt={t.home.name}
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.home.techTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((tech) => (
              <div key={tech} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{tech.charAt(0)}</span>
                </div>
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
