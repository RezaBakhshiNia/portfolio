import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/translations"

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function About({ params }: Props) {
  const { locale } = await params
  const t = getTranslation(locale)

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "SASS",
    "Node.js",
    "Git",
    "Figma",
    "Responsive Design",
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t.about.title}</h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t.about.journeyTitle}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t.about.journeyText1}</p>
              <p>{t.about.journeyText2}</p>
              <p>{t.about.journeyText3}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">{t.about.whatIDoTitle}</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-500" />
                    {t.about.frontendDev}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.about.frontendDesc}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-purple-500" />
                    {t.about.uiImplementation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.about.uiDesc}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-500" />
                    {t.about.performance}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.about.performanceDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">{t.about.skillsTitle}</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">{t.about.educationTitle}</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>{t.about.degree}</CardTitle>
              <p className="text-muted-foreground">{t.about.university}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.about.educationDesc}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
