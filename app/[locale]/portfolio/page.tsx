import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getTranslation, type Locale } from "@/lib/translations"

const projects = [
  {
    id: 1,
    key: "ecommerce",
    image: "/placeholder.svg?height=300&width=500&text=E-Commerce+Platform",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/rezabakhshinia/ecommerce-platform",
  },
  {
    id: 2,
    key: "taskManager",
    image: "/placeholder.svg?height=300&width=500&text=Task+Management+App",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/rezabakhshinia/task-manager",
  },
  {
    id: 3,
    key: "weather",
    image: "/placeholder.svg?height=300&width=500&text=Weather+Dashboard",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3", "Local Storage"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/rezabakhshinia/weather-dashboard",
  },
  {
    id: 4,
    key: "portfolio",
    image: "/placeholder.svg?height=300&width=500&text=Portfolio+Website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],
    liveUrl: "https://rezabakhshinia.dev",
    githubUrl: "https://github.com/rezabakhshinia/portfolio",
  },
  {
    id: 5,
    key: "recipe",
    image: "/placeholder.svg?height=300&width=500&text=Recipe+Finder+App",
    technologies: ["React", "Redux", "Spoonacular API", "SASS", "PWA"],
    liveUrl: "https://recipe-finder-demo.vercel.app",
    githubUrl: "https://github.com/rezabakhshinia/recipe-finder",
  },
  {
    id: 6,
    key: "fitness",
    image: "/placeholder.svg?height=300&width=500&text=Fitness+Tracker",
    technologies: ["React Native", "Firebase", "Chart.js", "AsyncStorage", "Expo"],
    liveUrl: "https://fitness-tracker-demo.vercel.app",
    githubUrl: "https://github.com/rezabakhshinia/fitness-tracker",
  },
]

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function Portfolio({ params }: Props) {
  const { locale } = await params
  const t = getTranslation(locale)

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t.portfolio.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={t.portfolio.projects[project.key as keyof typeof t.portfolio.projects].title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  {t.portfolio.projects[project.key as keyof typeof t.portfolio.projects].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {t.portfolio.projects[project.key as keyof typeof t.portfolio.projects].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button asChild size="sm" className="flex-1">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.portfolio.liveDemo}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      {t.portfolio.code}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
